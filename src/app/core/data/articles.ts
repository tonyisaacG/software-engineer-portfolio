export interface ArticleSection {
  heading: string;
  body: string;
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  callout?: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  summary: string;
  sections: ArticleSection[];
  takeaways: string[];
}

export const articles: Article[] = [
  {
    slug: 'increasing-query-throughput-40-percent-cqrs-dotnet',
    title: 'How We Increased Database Query Throughput by 40% Using CQRS in .NET',
    date: 'Nov 2026',
    readingTime: '7 min read',
    category: 'Architecture & Performance',
    tags: ['C#', 'ASP.NET Core', 'CQRS', 'EF Core', 'Redis', 'SQL Server'],
    summary:
      'In a high-frequency multi-branch retail platform, mixed read/write workloads ' +
      'caused severe table locking and slow ledger generation. Here is how segregating ' +
      'read and write paths using CQRS and Redis caching unlocked a 40% throughput improvement.',
    sections: [
      {
        heading: 'The Challenge: Mixed Workloads and Relational Contention',
        body:
          'In our Retail Management System (RMS), point-of-sale terminals stream transactions ' +
          'continuously while store managers simultaneously query balance ledgers and stock catalogs. ' +
          'Running complex aggregation queries against the same relational tables receiving real-time ' +
          'inserts led to lock escalation, connection pool exhaustion, and erratic API response times.',
        callout:
          'Relational databases excel at ACID guarantees during writes, but running deep JOINs ' +
          'on live transaction tables degrades throughput for everyone.',
      },
      {
        heading: 'The Architectural Shift: Command Query Responsibility Segregation',
        body:
          'Rather than routing every request through a single heavyweight repository, we segregated ' +
          'the system into two distinct pipelines:\n\n' +
          '1. **Commands (Write):** Handled through strict domain entities enforcing business rules ' +
          'and transactional atomicity via EF Core.\n' +
          '2. **Queries (Read):** Bypassed domain entity tracking entirely. We leveraged raw DTO projections ' +
          'with `.AsNoTracking()`, indexed read-views, and an in-memory Redis cache layer for repetitive lookups.',
        codeSnippet: {
          language: 'csharp',
          caption: 'Query Handler using direct projection and No-Tracking',
          code: `public sealed class GetStoreLedgerQueryHandler 
    : IRequestHandler<GetStoreLedgerQuery, StoreLedgerResponse>
{
    private readonly AppDbContext _context;
    private readonly IDistributedCache _cache;

    public GetStoreLedgerQueryHandler(AppDbContext context, IDistributedCache cache)
    {
        _context = context;
        _cache = cache;
    }

    public async Task<StoreLedgerResponse> Handle(
        GetStoreLedgerQuery request, 
        CancellationToken cancellationToken)
    {
        // 1. Check Redis read cache
        var cached = await _cache.GetAsync<StoreLedgerResponse>(request.CacheKey, cancellationToken);
        if (cached is not null) return cached;

        // 2. Optimized No-Tracking projection directly to DTO
        var ledger = await _context.StoreLedgers
            .AsNoTracking()
            .AsSplitQuery()
            .Where(x => x.BranchId == request.BranchId && x.Date >= request.StartDate)
            .Select(StoreLedgerProjections.ToDto)
            .FirstOrDefaultAsync(cancellationToken);

        if (ledger is not null)
        {
            await _cache.SetAsync(request.CacheKey, ledger, TimeSpan.FromMinutes(5), cancellationToken);
        }

        return ledger ?? StoreLedgerResponse.Empty;
    }
}`,
        },
      },
      {
        heading: 'Measurable Outcomes',
        body:
          'By eliminating change-tracker overhead on read queries, adding selective covering indexes, ' +
          'and offloading read-heavy catalog queries to Redis, we measured:\n\n' +
          '• **40% increase in database query throughput** under peak load.\n' +
          '• P99 response times dropped from 820ms to under 140ms on ledger queries.\n' +
          '• Zero concurrency deadlocks between POS sales terminals and back-office accounting audits.',
      },
    ],
    takeaways: [
      'Separate read and write paths when database contention harms high-frequency transactions.',
      'Always use .AsNoTracking() and direct Select projections for read operations in EF Core.',
      'Pair CQRS queries with targeted distributed caching (Redis) for high-impact read performance.',
    ],
  },
  {
    slug: 'fault-tolerant-tax-authority-pipeline-quartz-hmac',
    title: 'Building a Fault-Tolerant Tax Integration Pipeline with Quartz.NET and HMAC',
    date: 'Oct 2026',
    readingTime: '6 min read',
    category: 'Security & Integration',
    tags: ['ASP.NET Core', 'Quartz.NET', 'HMAC', 'Multi-Tenant', 'Serilog', 'Security'],
    summary:
      'Integrating external government tax authorities requires bulletproof reliability. ' +
      'Here is the architecture behind our centralized ETA integration middleware: cryptographic ' +
      'HMAC request verification, background scheduling with Quartz.NET, and rate-limited retries.',
    sections: [
      {
        heading: 'The Problem: Unforgiving External Government APIs',
        body:
          'Integration with the Egyptian Tax Authority (ETA) demands absolute accuracy. Every invoice ' +
          'must be validated, signed, and ingested within strict regulatory compliance. However, external ' +
          'government gateways frequently experience latency spikes, strict rate limits, and occasional outages. ' +
          'Direct synchronous calls from client applications were fragile and resulted in failed user submissions.',
      },
      {
        heading: 'The Architecture: Asynchronous Ingestion & Quartz.NET Workers',
        body:
          'We decoupled the ingestion pipeline into an asynchronous event queue with scheduled Quartz.NET ' +
          'workers. When an invoice is created, it is stored locally in an `Ingested` state and immediately ' +
          'acknowledged. A background Quartz.NET job processes the batch, signs the payload, and manages ' +
          'exponential backoff retries.',
        codeSnippet: {
          language: 'csharp',
          caption: 'Cryptographic HMAC Signature Verification Middleware',
          code: `public sealed class HmacValidationMiddleware
{
    private readonly RequestDelegate _next;
    private readonly IConfiguration _config;

    public HmacValidationMiddleware(RequestDelegate next, IConfiguration config)
    {
        _next = next;
        _config = config;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (!context.Request.Headers.TryGetValue("X-Signature-HMAC", out var providedSig))
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            return;
        }

        context.Request.EnableBuffering();
        using var reader = new StreamReader(context.Request.Body, leaveOpen: true);
        var body = await reader.ReadToEndAsync();
        context.Request.Body.Position = 0;

        var computedSig = ComputeHmacSha256(body, _config["Hmac:SecretKey"]!);
        if (!CryptographicOperations.FixedTimeEquals(
            Encoding.UTF8.GetBytes(computedSig),
            Encoding.UTF8.GetBytes(providedSig!)))
        {
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            return;
        }

        await _next(context);
    }
}`,
        },
      },
      {
        heading: 'Key Architectural Safeguards',
        body:
          '1. **Constant-Time Comparison:** Prevents cryptographic timing attacks during signature verification.\n' +
          '2. **Idempotency Keys:** Every document payload carries a unique deterministic hash preventing duplicate tax submissions.\n' +
          '3. **Tenant-Aware Rate Limiting:** Ensures no single branch can monopolize the API quota allocated by the tax authority.',
      },
    ],
    takeaways: [
      'Never couple user-facing transactions synchronously to fragile 3rd-party government APIs.',
      'Use Quartz.NET with persistent job stores for dependable asynchronous delivery and retries.',
      'Enforce HMAC authentication and fixed-time verification on all webhooks and ingestion pipelines.',
    ],
  },
  {
    slug: 'enforcing-multi-tenant-isolation-ef-core',
    title: 'Enforcing Absolute Multi-Tenant Isolation in EF Core without Leaks',
    date: 'Sep 2026',
    readingTime: '5 min read',
    category: 'Backend & Data Architecture',
    tags: ['C#', 'EF Core', 'Multi-Tenant', 'Architecture', 'Security'],
    summary:
      'In a multi-tenant accounting platform, leaking data between tenants is a catastrophic failure. ' +
      'Here is how we use EF Core Global Query Filters, tenant resolution middleware, and automated ' +
      'audit tracking to guarantee complete isolation.',
    sections: [
      {
        heading: 'The Risk: Human Error in Manual Tenant Filtering',
        body:
          'When building multi-tenant SaaS backends, relying on developers to manually remember ' +
          '`.Where(x => x.TenantId == currentTenantId)` on every query is a recipe for security vulnerabilities. ' +
          'One forgotten query during a quick feature sprint leaks customer financials across tenants.',
      },
      {
        heading: 'The Solution: Automatic Global Query Filters',
        body:
          'We implemented an `ITenantScoped` interface and leveraged EF Core Model-Level Query Filters. ' +
          'During `OnModelCreating`, the filter is automatically applied to all entities implementing the contract. ' +
          'EF Core automatically rewrites every SQL query to inject `WHERE TenantId = @CurrentTenantId`.',
        codeSnippet: {
          language: 'csharp',
          caption: 'Automated Global Query Filter configuration in EF Core DbContext',
          code: `public interface ITenantScoped
{
    public string TenantId { get; set; }
}

public class AppDbContext : DbContext
{
    private readonly ITenantProvider _tenantProvider;

    public AppDbContext(DbContextOptions<AppDbContext> options, ITenantProvider tenantProvider)
        : base(options)
    {
        _tenantProvider = tenantProvider;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        foreach (var entityType in modelBuilder.Model.GetEntityTypes())
        {
            if (typeof(ITenantScoped).IsAssignableFrom(entityType.ClrType))
            {
                var method = typeof(AppDbContext)
                    .GetMethod(nameof(ConfigureTenantFilter), BindingFlags.NonPublic | BindingFlags.Instance)!
                    .MakeGenericMethod(entityType.ClrType);

                method.Invoke(this, new object[] { modelBuilder });
            }
        }
    }

    private void ConfigureTenantFilter<T>(ModelBuilder builder) where T : class, ITenantScoped
    {
        builder.Entity<T>().HasQueryFilter(e => e.TenantId == _tenantProvider.CurrentTenantId);
    }
}`,
        },
      },
    ],
    takeaways: [
      'Automate tenant filtering at the ORM layer rather than trusting manual developer checks.',
      'Override SaveChangesAsync() to automatically populate TenantId and audit stamps.',
      'Write integration tests that explicitly verify that cross-tenant access returns 404/Empty results.',
    ],
  },
];

