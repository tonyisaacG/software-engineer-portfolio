# Portfolio Experience Section --- Content & Implementation Brief

> **Purpose:** Use this document as the source of truth for building the
> Professional Experience section of the portfolio.
>
> **Important:** This is a content brief, not permission to invent
> achievements. Keep claims factual, distinguish professional work from
> personal projects, and leave placeholders where details need
> confirmation.

## 1. Candidate profile

-   **Role:** Software Engineer
-   **Company:** Cyrus Tech Company
-   **Employment start:** January 2023
-   **Primary engineering focus:** Backend and business application
    development
-   **Main stack:** C#, .NET / ASP.NET Core, SQL Server, Entity
    Framework Core, Angular, TypeScript
-   **Additional areas:** REST APIs, third-party integrations,
    background jobs, database design and troubleshooting, Linux
    deployment, Nginx, Redis, CI/CD
-   **Experience positioning:** Software Engineer with hands-on
    experience developing and maintaining business applications and
    integrations. Do not label the candidate Senior Engineer or imply
    people-management responsibility unless separately confirmed.

## 2. Professional experience entry

### Software Engineer --- Cyrus Tech Company

**January 2023 -- Present**\
**Location:** Cairo, Egypt *(confirm before publishing)*

#### Short description

Develop and maintain business software across retail management,
point-of-sale, inventory, CRM, and electronic invoicing workflows. Work
across backend APIs, database operations, integrations, frontend
features, production troubleshooting, and deployment.

#### Suggested responsibility themes

Use only the themes that accurately reflect the candidate's direct
involvement:

-   Develop and maintain backend services and REST APIs using C# and
    ASP.NET Core.
-   Work with SQL Server and Entity Framework Core to implement
    application data access and business workflows.
-   Build and maintain frontend functionality using Angular and
    TypeScript.
-   Integrate business platforms and external services, including Odoo,
    Shopify, Foodics, and Egyptian Tax Authority services.
-   Implement and troubleshoot background processing and scheduled jobs.
-   Investigate production issues across application, database, and
    infrastructure layers.
-   Support deployment and operation of .NET applications on Linux
    environments using systemd and Nginx, with Redis where required.
-   Participate in code review, testing, issue investigation, and
    coordination of development work.

Do not present every bullet as a leadership responsibility. Describe
coordination, reviews, and operational follow-up as team contributions
unless formal ownership is confirmed.

------------------------------------------------------------------------

## 3. Selected professional projects

The projects below should appear as selected work under the Cyrus Tech
Company experience entry. They are not separate employers. Keep
company-sensitive details, customer identifiers, source code, internal
URLs, server addresses, credentials, and production data out of the
public portfolio.

### Project A --- Retail Management System (RMS)

**Category:** Retail Management / POS / Inventory\
**Role context:** Backend and full-stack feature development,
maintenance, integrations, and production troubleshooting\
**Technologies:** C#, .NET 8, ASP.NET Core, SQL Server, Entity Framework
Core, Angular, REST APIs

**Project overview**

A business application supporting retail operations, including
point-of-sale workflows, inventory, product management, warehouse
transactions, and related business processes.

**Work areas to describe**

-   Implement and maintain backend APIs and business logic for retail
    workflows.
-   Work on inventory and warehouse transaction behavior, including
    stock movement and balance-related operations.
-   Investigate issues involving product data, mapping, pricing,
    categories, vendors, and related application entities.
-   Support POS and administration workflows.
-   Work with SQL Server data and troubleshoot application/database
    behavior.
-   Contribute to integration and operational improvements where
    applicable.

**Potential case-study topics**

-   Modeling inventory movements and maintaining correct stock balances.
-   Handling damaged goods and inventory adjustments without corrupting
    stock history.
-   Diagnosing data-mapping issues across API and application layers.
-   Improving database queries and investigating performance
    bottlenecks.
-   Designing audit history for business data changes.

**Public wording example**

"Contributed to the development and maintenance of a retail management
platform, working across backend APIs, inventory workflows, POS-related
features, SQL Server data operations, and production issue
investigation."

**Do not claim without evidence**

-   Specific performance improvements or percentage reductions.
-   Full ownership of the RMS architecture.
-   Exact user, branch, transaction, or revenue counts.
-   That every module was designed or implemented independently.

### Project B --- Egyptian E-Invoicing / E-Receipt Integration Middleware

**Category:** Business Integration / Tax Systems\
**Role context:** Backend integration development, API maintenance, data
handling, and troubleshooting\
**Technologies:** C#, .NET, ASP.NET Core, SQL Server, REST APIs,
background jobs *(confirm exact technologies per module before
publishing)*

**Project overview**

Middleware connecting business applications with Egyptian Tax Authority
electronic invoice and receipt services. The integration handles the
exchange and processing of business document data between systems.

**Work areas to describe**

-   Develop and maintain API integrations between business applications
    and tax-related services.
-   Work with invoice and receipt data structures and document
    identifiers.
-   Investigate integration failures, request/response behavior, and
    environment-specific issues.
-   Support synchronization and background processing workflows where
    applicable.
-   Troubleshoot application behavior across development, testing,
    staging, and production environments.

**Potential case-study topics**

-   Designing reliable third-party API integrations.
-   Handling retries, timeouts, and transient failures.
-   Validating and mapping external document payloads.
-   Managing document lifecycle and status synchronization.
-   Diagnosing environment, networking, and deployment-related
    integration failures.

**Public wording example**

"Worked on backend middleware integrations between business applications
and Egyptian electronic invoicing and receipt services, focusing on API
communication, document data handling, synchronization, and
troubleshooting."

**Do not publish**

-   Taxpayer identifiers, client tax data, invoice payloads,
    certificates, tokens, private endpoints, or production logs.
-   Internal environment names, server IP addresses, credentials, or
    customer-specific integration details.

### Project C --- Reportal: CRM / Practice Management Platform for Accounting Firms

**Category:** SaaS / CRM / Multi-Tenant Business Application\
**Role context:** Confirm whether this was company work, an independent
project, or a project developed outside the Cyrus role before assigning
it to this employment entry.\
**Technologies:** .NET 9, C#, EF Core 9, SQL Server, Domain-Driven
Design, Google Drive API, Angular *(confirm frontend technology and
production status)*

**Project overview**

A CRM and workflow platform intended for accounting firms to manage
clients, employees, tasks, and related documents. The architecture
considers tenant and firm boundaries, user permissions, and document
relationships.

**Work areas / architecture topics recorded**

-   Organizing the application around domain boundaries and modular
    responsibilities.
-   Modeling firm, user, employee, client, and task relationships.
-   Considering role- and permission-based access to clients and work
    assignments.
-   Designing document associations through entity type and entity ID
    relationships.
-   Integrating Google Drive for document storage, including OAuth
    consent and token handling.
-   Supporting client lifecycle statuses and Excel-based import/export
    workflows.

**Potential case-study topics**

-   Multi-tenant data isolation and authorization boundaries.
-   Modeling document links across multiple business entity types.
-   Integrating an external document provider with OAuth.
-   Designing maintainable DDD boundaries in a business application.

**Public wording example (only after confirming project
classification)**

"Designed and developed parts of a CRM platform for accounting firms,
focusing on domain modeling, tenant-aware access, client and task
workflows, and Google Drive document integration."

**Classification rule**

If this is an independent or personal project rather than work delivered
for Cyrus Tech Company, move it to the Projects section. Do not list it
as professional employment experience.

------------------------------------------------------------------------

## 4. Recommended portfolio presentation

Use one employment timeline entry for **Cyrus Tech Company**, then show
selected projects as distinct visual project panels within that entry.

Recommended hierarchy:

1.  Company, job title, dates, and location.
2.  A concise 2--3 sentence role summary.
3.  A compact technology list.
4.  Selected projects:
    -   Retail Management System (RMS)
    -   E-Invoicing / E-Receipt Integration Middleware
    -   Reportal --- only if confirmed as professional work
5.  A link to a separate case study only when a detailed, sanitized case
    study exists.

Avoid turning the experience section into a long list of every task
completed. Highlight the nature of the systems, the engineering areas
involved, and a few meaningful examples of problem-solving.

## 5. Visual direction for the agent

**Design direction:** Editorial / Magazine.

-   Use a strong editorial heading and a clear timeline or split-column
    layout.
-   Give the employment entry a prominent visual position.
-   Present projects as varied, compact panels rather than identical
    generic cards.
-   Use typography, spacing, subtle borders, and small accent details to
    create hierarchy.
-   Keep both light and dark themes.
-   Use restrained motion only when it improves navigation or feedback.
-   Ensure the layout works on mobile, tablet, and desktop.
-   Use semantic HTML and accessible contrast, focus states, and heading
    order.
-   Keep the Angular implementation componentized but do not introduce
    unnecessary abstractions.

## 6. Accuracy and privacy rules

-   Do not invent metrics, project dates, team sizes, user counts,
    scale, uptime, or performance improvements.
-   Do not claim sole ownership of systems built by a team.
-   Prefer "worked on", "contributed to", "implemented", or "maintained"
    when ownership boundaries are not confirmed.
-   Separate professional experience from personal/independent projects.
-   Do not publish confidential code, customer names, tax identifiers,
    database names, internal URLs, IP addresses, credentials, tokens,
    certificates, or production screenshots.
-   Do not expose internal company architecture or operational details
    that are not approved for public disclosure.
-   Keep the public description understandable to recruiters and
    engineering managers; place deeper technical detail in case studies.

## 7. Details to confirm before publishing

The agent should not block the initial layout on these questions. Use
neutral wording or omit unknown values until confirmed.

-   [ ] Confirm whether the official company name should be shown as
    "Cyrus Tech Company".
-   [ ] Confirm employment title and whether the date should be "January
    2023 -- Present".
-   [ ] Confirm whether Cairo, Egypt should be shown as the location.
-   [ ] Confirm which RMS modules/features the candidate personally
    implemented.
-   [ ] Confirm the exact scope of personal contribution to the
    e-invoicing middleware.
-   [ ] Confirm whether Reportal belongs under professional experience
    or independent projects.
-   [ ] Add only measurable achievements that can be substantiated.
-   [ ] Confirm which technologies were used directly on each project.

## 8. Agent implementation instruction

Build **only the Professional Experience section** using this content
brief.

Do not build the Projects, Case Studies, or Writing sections yet. Do not
invent missing content. Use the Editorial / Magazine visual direction,
preserve the existing light/dark theme system, and make the section
responsive and accessible.

Before implementation, inspect the existing Angular component structure
and design tokens. Reuse the existing conventions where sensible. Keep
content data separate from the template so it can be reviewed and
updated easily.

After implementation:

1.  Run the production build.
2.  Check the section at desktop and mobile widths.
3.  Verify light and dark themes.
4.  Report any content that still needs confirmation.
5.  Do not add fabricated metrics or unsupported claims.
