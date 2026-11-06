export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  projects: {
    name: string;
    description: string;
    stack: string[];
    highlights: string[];
  }[];
}

export interface ProjectItem {
  name: string;
  pitch: string;
  stack: string[];
  links?: { label: string; url: string }[];
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
  headline: 'Software Engineer — Backend',
  focus: '.NET & Backend Engineering',
  location: 'Cairo, Egypt',
  email: 'antonyisaacgayed@gmail.com',
  phone: '+20 122 560 9831',
  yearsExperience: '3+',
  summary:
    'Detail-oriented Software Engineer with 3+ years of professional experience ' +
    'developing robust APIs, core backend systems, and secure application modules ' +
    'within the .NET ecosystem. I build scalable RESTful services using Clean ' +
    'Architecture, and I care about clean code, tested systems, and measurable ' +
    'performance gains.',
  currentRole: 'Software Engineer (.NET Backend) at Cyrus',
  links: {
    github: '',
    linkedin: '',
    hackerrank: '',
    cv: '/cv.pdf',
  },
  focusAreas: [
    { title: 'Backend Engineering', description: 'C#, ASP.NET Core, REST APIs, Web API.' },
    { title: 'Architecture', description: 'Clean Architecture, CQRS, Modular Monolith, Multi-Tenant.' },
    { title: 'Databases', description: 'SQL Server, MySQL, SQLite, EF Core, Redis, query tuning.' },
    { title: 'Security', description: 'JWT, HMAC signatures, RBAC, rate limiting.' },
    { title: 'Testing & DevOps', description: 'xUnit, Docker, Serilog, Quartz.NET, Git, CI workflows.' },
    { title: 'Frontend', description: 'Angular, TypeScript, JavaScript, HTML5, CSS3/Sass.' },
  ],
  interests: [
    'API and integration design',
    'Distributed systems and background processing',
    'Database performance and indexing',
    'Clean, testable architecture',
    'Developer tooling and automation',
  ],
  philosophy:
    'Good software starts with understanding the problem before writing code. ' +
    'I make deliberate engineering decisions, keep systems maintainable, and ' +
    'measure performance instead of guessing. I learn best by building real ' +
    'things and reflecting on what holds up in production.',
  experience: [
    {
      role: 'Software Engineer (.NET Backend)',
      company: 'Cyrus',
      period: 'Mar 2023 – Present',
      location: 'Cairo, Egypt',
      summary:
        'Backend engineer on production business platforms: a tax-authority ' +
        'middleware integration, a multi-branch retail management system, and a ' +
        'multi-tenant accounting CRM.',
      projects: [
        {
          name: 'ETA Middleware Integration System',
          description:
            'Centralized middleware platform integrated with Egyptian Tax Authority ' +
            'portals for data ingestion and document validation workflows.',
          stack: ['ASP.NET Core', 'Quartz.NET', 'HMAC', 'Multi-Tenant', 'Serilog'],
          highlights: [
            'Migrated monolithic integration engines toward multi-tenant structures for scalability',
            'Implemented HMAC-signed secure ingestion pipelines',
            'Built Quartz.NET background sync workers with rate limiting and structured logging',
          ],
        },
        {
          name: 'Retail Management System (RMS)',
          description:
            'Back-end services for a multi-branch retail architecture covering ' +
            'inventory catalogs, point-of-sale, and balance ledgers.',
          stack: ['ASP.NET Core', 'EF Core', 'CQRS', 'Modular Monolith', 'Redis', 'SQL Server'],
          highlights: [
            'Isolated domain contexts in a modular monolith to reduce coupling',
            'CQRS read/write segregation increased heavy query throughput by 40%',
            'Redis layers and sync workers keep offline transactions consistent',
          ],
        },
        {
          name: 'Portal & CRM Accountant System',
          description:
            'Multi-tenant accounting CRM orchestrating tax document lifecycles ' +
            'and administrative audit assignments.',
          stack: ['ASP.NET Core Web API', 'SQL Server', 'RBAC', 'Multi-Tenant'],
          highlights: [
            'Government integration modules for profile fetching and archiving',
            'Indexing optimization accelerated financial reporting by 35%',
            'RBAC layers enforce strict tenant isolation',
          ],
        },
      ],
    },
    {
      role: 'Software Engineer (.NET Backend)',
      company: 'Freelance',
      period: 'Jan 2023 – Feb 2023',
      location: 'Cairo, Egypt',
      summary:
        'Desktop accounting client for commercial branches processing ' +
        'high-frequency balance records.',
      projects: [
        {
          name: 'Financial Transfer Application Module',
          description:
            'Secure internal desktop accounting client for deposits, withdrawals, ' +
            'and internal account clearing.',
          stack: ['Windows Forms', 'C#', 'SQL Server'],
          highlights: [
            'Stored procedures guarantee atomicity for financial transactions',
            'Standardized desktop-to-server sync with audit log retention',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Seafood Restaurant System',
      pitch:
        'Online food ordering, kitchen management, and logistics tracking for ' +
        'multi-branch restaurant administration.',
      stack: ['Angular', 'ASP.NET Core Web API', 'EF Core (Code First)'],
    },
    {
      name: 'Courses Center Platform',
      pitch:
        'Educational portal for remote learning: digital repository, assignment ' +
        'distribution, and student records.',
      stack: ['ASP.NET MVC', 'C#', 'SQL', 'jQuery', 'Ajax', 'Sass', 'Bootstrap', 'ES6'],
    },
    {
      name: 'Chrome Extension Utility App',
      pitch:
        'Browser productivity tool with interactive greetings and state-retaining ' +
        'to-do utilities.',
      stack: ['JavaScript', 'HTML5', 'CSS3'],
    },
  ],
  education: [
    {
      institution: 'Information Technology Institute (ITI)',
      credential: 'Open Source .NET Full Stack Development — Intensive Training (120 hrs)',
      period: 'Apr 2022 – Aug 2022',
      note: 'Minya Branch',
    },
    {
      institution: 'Minya University',
      credential: 'Bachelor of Computers and Information',
      period: '2016 – 2020',
      note: 'Minya, Egypt',
    },
  ],
  certifications: [
    { name: 'Advanced Web APIs with ASP.NET Core in .NET 6', issuer: 'LinkedIn', year: 'Sep 2022' },
    { name: 'Database Fundamentals & TypeScript Fundamentals', issuer: 'MaharTech', year: '2022' },
    { name: 'Interactivity with JavaScript', issuer: 'Coursera', year: '2022' },
    { name: 'Open Source Development Training (120 hrs)', issuer: 'ITI Minya Branch', year: 'Aug 2019' },
  ],
  languages: ['Arabic (Native)', 'English (Good)'],
};
