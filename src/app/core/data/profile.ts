export interface ProjectHighlight {
  name: string;
  domain: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  areas: {
    title: string;
    description: string;
  }[];
  projects: ProjectHighlight[];
}

export interface ProjectItem {
  name: string;
  domain: string;
  category: string;
  pitch: string;
  architectureDetails: string;
  stack: string[];
  links?: { label: string; url: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  credential: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const profile = {
  name: 'Antony Isaac Gayed',
  firstName: 'Antony',
  monogram: 'AG',
  headline: 'Software Engineer',
  positioning: 'Software Engineer | .NET / Full-Stack Development | Enterprise Business Systems',
  focus: '.NET 8/9 · ASP.NET Core · Clean Architecture · SQL Server · Angular',
  location: 'Cairo, Egypt',
  email: 'antonyisaacgayed@gmail.com',
  phone: '+20 122 560 9831',
  yearsExperience: '3 Years',
  status: 'Open to engineering opportunities & remote roles',
  heroPitch:
    'Software Engineer specializing in C#, ASP.NET Core, and distributed backend architectures. ' +
    'I design and scale high-reliability enterprise business platforms, POS systems, and tax compliance integration gateways.',
  heroHighlights: [
    { label: 'Current Role', value: 'Software Engineer at Cyrus Tech Company' },
    { label: 'Core Specialization', value: 'Backend Architecture & Transactional Systems' },
    { label: 'Key Impact', value: '+40% Query Throughput via CQRS & Redis Caching' },
    { label: 'Integrations', value: 'Egyptian Tax Authority (ETA) HMAC Invoicing Gateway' },
    { label: 'Infrastructure', value: 'Linux (Ubuntu), Nginx Reverse Proxy, Kestrel' },
  ],
  aboutBio:
    'Over the past 3 years at Cyrus Tech Company, I have specialized in engineering transactional backend engines ' +
    'and multi-tenant business platforms. My daily work revolves around designing clean domain models, optimizing relational database ' +
    'schemas in SQL Server, and ensuring high throughput and strict ACID consistency across retail and accounting platforms.',
  aboutRole:
    'I actively contribute across the entire engineering lifecycle: translating complex business logic into modular ' +
    'Clean Architecture services, automating background reconciliation workers with Quartz.NET, diagnosing production bottlenecks, ' +
    'and deploying resilient services behind Nginx reverse proxies on Linux.',
  summary:
    'Software Engineer with ~3 years of professional experience specializing in backend ' +
    'development using C# and the .NET ecosystem (.NET 8/9, ASP.NET Core, EF Core, SQL Server), ' +
    'complemented by practical full-stack experience in Angular & TypeScript, and hands-on Linux/Nginx infrastructure.',
  currentRole: 'Software Engineer at Cyrus Tech Company',
  links: {
    github: 'https://github.com/tonyisaacG',
    linkedin: 'https://www.linkedin.com/in/tony-isaac',
    hackerrank: 'https://www.hackerrank.com/profile/antonyisaacgayed',
    cv: '/cv.pdf',
  },
  skillCategories: [
    {
      title: 'Backend Engineering',
      skills: [
        'C#',
        '.NET 8 / .NET 9',
        'ASP.NET Core',
        'Web API',
        'Entity Framework Core',
        'LINQ',
        'Quartz.NET / Hangfire',
        'REST API Design',
        'HMAC Signatures',
        'Rate Limiting & Auth (RBAC)',
      ],
    },
    {
      title: 'Architecture & Design',
      skills: [
        'Clean Architecture',
        'Domain-Driven Design (DDD)',
        'CQRS',
        'Modular Monolith',
        'Multi-Tenant Isolation',
        'Offline-First Systems',
        'Eventual Consistency',
      ],
    },
    {
      title: 'Database & Caching',
      skills: [
        'SQL Server',
        'Redis (Distributed Caching)',
        'MySQL',
        'SQLite',
        'EF Core Migrations',
        'Query & Index Optimization',
        'ACID & Transaction Safety',
      ],
    },
    {
      title: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'JavaScript (ES6)', 'HTML5', 'CSS3 / SCSS', 'API Integration'],
    },
    {
      title: 'Infrastructure & DevOps',
      skills: [
        'Linux (Ubuntu)',
        'Nginx Reverse Proxy',
        'systemd Services',
        'Kestrel Hosting',
        'Redis',
        'Git & GitHub Actions',
        'CI/CD Pipelines',
        'Production Troubleshooting',
      ],
    },
  ],
  interests: [
    'System Design & Distributed Reliability',
    'Database Internals & Index Tuning',
    'Clean, Testable Backend Architecture',
    'Transactional Consistency in Financial/Inventory Data',
    'Linux Server Operations & Deployment Automation',
  ],
  philosophy:
    'Good software engineering starts with understanding the problem before writing code. ' +
    'I ask the critical questions: Why this architecture? What happens when an external dependency is unavailable? ' +
    'How do we prevent inconsistent data when concurrent requests touch the same balance? ' +
    'I make decisions based on real constraints, measurable behavior, and technical trade-offs.',
  experience: [
    {
      role: 'Software Engineer',
      company: 'Cyrus Tech Company',
      period: 'Mar 2023 – Present',
      location: 'Cairo, Egypt',
      summary:
        'Engineering enterprise business platforms including retail management systems, ' +
        'POS solutions, tax authority integrations, and CRM accounting software across the full software lifecycle.',
      areas: [
        {
          title: 'Backend Engineering',
          description:
            'Developed ASP.NET Core Web APIs, implemented business logic, designed modular services, and engineered background jobs with Quartz.NET.',
        },
        {
          title: 'Database Engineering',
          description:
            'Managed complex relational schemas in SQL Server, handled EF Core migrations, investigated data inconsistencies, and optimized query performance.',
        },
        {
          title: 'Frontend Engineering',
          description:
            'Developed and maintained Angular applications, connecting user-facing business workflows to backend APIs.',
        },
        {
          title: 'Production & Operations',
          description:
            'Published .NET applications to Linux (Ubuntu) servers, configured Nginx reverse proxies, managed systemd services, and diagnosed Redis connectivity.',
        },
        {
          title: 'Engineering Coordination',
          description:
            'Participated in code reviews, investigated production issues, verified delivered features, and coordinated deployment tasks.',
        },
      ],
      projects: [
        {
          name: 'Retail Management System (RMS)',
          domain: 'Retail Management & POS Enterprise Platform',
          description:
            'Enterprise business management platform supporting multi-branch retail operations: inventory, warehouse balances, POS workflows, sales, and purchases.',
          stack: ['ASP.NET Core', 'C#', 'SQL Server', 'EF Core', 'Angular', 'Redis'],
          highlights: [
            'Engineered warehouse product receiving, damaged inventory tracking, and balance consistency workflows',
            'Designed database audit architecture capturing historic versus new values to track record changes',
            'Investigated and resolved critical data integrity issues, relationship mapping bugs, and pricing inconsistencies',
          ],
        },
        {
          name: 'Egyptian Tax Authority (ETA) E-Invoicing Middleware',
          domain: 'Financial Integration Middleware',
          description:
            'Centralized middleware connecting retail management and POS systems with Egyptian Tax Authority e-invoicing and e-receipt portals.',
          stack: ['C#', 'ASP.NET Core', 'REST APIs', 'Quartz.NET', 'HMAC', 'Multi-Tenant', 'Serilog'],
          highlights: [
            'Built reliable ingestion pipelines connecting external POS platforms and ERPs (Odoo, Shopify, Foodics)',
            'Implemented API cryptographic HMAC signatures and background worker synchronization via Quartz.NET',
            'Designed robust data transformation pipelines with rate limiting and comprehensive structured error telemetry',
          ],
        },
        {
          name: 'Reportal CRM / Accountant SaaS',
          domain: 'Accounting Office SaaS Platform',
          description:
            'Multi-tenant SaaS platform for accounting offices to manage clients, employee tasks, documents, and corporate tax lifecycles.',
          stack: ['.NET 9', 'EF Core 9', 'SQL Server', 'Clean Architecture', 'DDD', 'Google Drive OAuth', 'RBAC'],
          highlights: [
            'Architected domain bounded contexts and enforced multi-tenant data isolation at the database layer',
            'Designed granular Role-Based Access Control (RBAC) separating administrative and employee visibility',
            'Integrated Google Drive API for tenant-scoped cloud document storage, OAuth callbacks, and token handling',
          ],
        },
      ],
    },
    {
      role: 'Software Engineer (.NET)',
      company: 'Freelance & Independent Solutions',
      period: 'Jan 2023 – Feb 2023',
      location: 'Cairo, Egypt',
      summary:
        'Developed accounting and financial client modules for commercial branches, engineering ' +
        'database stored procedures guaranteeing strict ACID atomicity during balance adjustments, ' +
        'deposits, and account reconciliations.',
      areas: [],
      projects: [
        {
          name: 'Financial Transfer Application Module',
          domain: 'Desktop Financial Accounting',
          description:
            'Internal accounting client used across commercial branches to process high-frequency balance records and ledger synchronization.',
          stack: ['Windows Forms', 'C#', 'SQL Server', 'Stored Procedures'],
          highlights: [
            'Engineered atomic database procedures guaranteeing zero inconsistency during financial transactions',
            'Standardized desktop-to-server relational synchronization protocols with complete audit log retention',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Seafood Restaurant Multi-Branch Platform',
      domain: 'Hospitality & Order Logistics',
      category: 'Full-Stack Application',
      pitch:
        'Full-stack online food ordering, kitchen order dispatching, and inventory logistics tracking system driving multi-branch restaurant administration.',
      architectureDetails:
        'Architected with an Angular standalone frontend, ASP.NET Core RESTful APIs, EF Core (Code First) persistence, and transactional SQL Server schema.',
      stack: ['Angular', 'TypeScript', 'ASP.NET Core Web API', 'EF Core', 'SQL Server'],
      links: [{ label: 'GitHub Repository', url: 'https://github.com/tonyisaacG/' }],
    },
    {
      name: 'Smart Wallet — Money Tracker',
      domain: 'Personal Finance Mobile Application',
      category: 'Mobile Application',
      pitch:
        'Offline-first personal finance application designed to help users track cash flows, categories, and balances with Arabic RTL support.',
      architectureDetails:
        'Built with Flutter & SQLite (SQFlite) utilizing Provider state management, database schema migrations, and Material 3 design.',
      stack: ['Flutter', 'Dart', 'SQLite', 'SQFlite', 'Provider', 'Material 3', 'RTL'],
      links: [{ label: 'GitHub Profile', url: 'https://github.com/tonyisaacG/' }],
    },
    {
      name: 'Courses Center Platform',
      domain: 'EdTech & Learning Management',
      category: 'Full-Stack Web Portal',
      pitch:
        'Full-featured educational portal facilitating remote learning environments, digital academic repository hosting, assignment distribution, and student records tracking.',
      architectureDetails:
        'Engineered backend logic using ASP.NET MVC and C#, relational database schema design in SQL Server, and asynchronous front-end workflows with AJAX and Sass.',
      stack: ['ASP.NET MVC', 'C#', 'SQL Server', 'jQuery', 'AJAX', 'Sass', 'Bootstrap'],
      links: [{ label: 'GitHub Repository', url: 'https://github.com/tonyisaacG/' }],
    },
    {
      name: 'Chrome Productivity Extension',
      domain: 'Browser Tooling & Productivity',
      category: 'Browser Extension',
      pitch:
        'Browser productivity utility featuring customized interactive user greetings paired with state-retaining browser storage To-Do list workflows.',
      architectureDetails:
        'Engineered using vanilla JavaScript (ES6+), Chrome Storage APIs for persistence, and responsive popup interface.',
      stack: ['JavaScript (ES6+)', 'Chrome Storage API', 'HTML5', 'CSS3'],
      links: [{ label: 'GitHub Repository', url: 'https://github.com/tonyisaacG/' }],
    },
  ],
  education: [
    {
      institution: 'Minya University',
      credential: 'Bachelor of Computers and Information',
      period: '2016 – 2020',
      note: 'Minya, Egypt',
    },
    {
      institution: 'Information Technology Institute (ITI)',
      credential: 'Open Source .NET Full Stack Development — Intensive Training (120 hrs)',
      period: 'Apr 2022 – Aug 2022',
      note: 'Minya Branch',
    },
  ],
  certifications: [
    { name: 'Advanced Web APIs with ASP.NET Core in .NET 6', issuer: 'LinkedIn', year: '2022' },
    { name: 'Database Fundamentals & TypeScript Fundamentals', issuer: 'MaharTech', year: '2022' },
    { name: 'Interactivity with JavaScript', issuer: 'Coursera', year: '2022' },
    { name: 'Open Source Development Training (120 hrs)', issuer: 'ITI Minya Branch', year: '2019' },
  ],
  languages: ['Arabic (Native)', 'English (Professional)'],
};
