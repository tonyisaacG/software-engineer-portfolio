# Dynamic Technical Writing & Newsletter Engine — Architectural Plan

**Feature Status:** Stored for Future Integration (Deferred per User Request)  
**Target Author:** Antony Isaac Gayed  
**Goal:** Build a dynamic, frictionless publishing system where you can write articles and have them automatically indexed, rendered with syntax highlighting, and distributed to newsletter subscribers without touching frontend HTML/CSS.

---

## 1. System Vision & User Experience

When you are ready to publish an engineering post:
1. You write an article in standard **Markdown (`.md`)** (with code blocks, diagrams, and headers).
2. The portfolio automatically parses the metadata, creates a dedicated URL (`/writing/my-article-slug`), generates a reading time, and adds it to the article catalogue.
3. A newsletter subscription banner collects subscriber emails, automatically syncing with your newsletter provider (Substack, Beehiiv, or Buttondown).

---

## 2. Dynamic Content Architecture Options

```
                   ┌───────────────────────────────────────────────┐
                   │           Dynamic Content Sources             │
                   ├───────────────────────┬───────────────────────┤
                   │  Option A (Git / .md) │ Option B (Headless CMS│
                   │  - In repo /assets/   │  - Hashnode API       │
                   │  - Zero cost, fast    │  - Web GUI editor     │
                   └───────────┬───────────┴───────────┬───────────┘
                               │                       │
                               ▼                       ▼
                   ┌───────────────────────────────────────────────┐
                   │             Angular Content Loader            │
                   │  - Dynamic Slug Resolver (/writing/:slug)     │
                   │  - Frontmatter Parser (Title, Date, Tags)     │
                   │  - Code Syntax Highlighter (Prism / C# / SQL) │
                   └───────────┬───────────────────────┬───────────┘
                               │                       │
                               ▼                       ▼
                   ┌───────────────────────┐┌───────────────────────┐
                   │   Public Reading UI   ││ Newsletter Automation │
                   │  - Standalone reader  ││  - Embedded API form  │
                   │  - SEO OpenGraph tags ││  - RSS Feed (feed.xml)│
                   └───────────────────────┘└───────────────────────┘
```

### Recommendation: Option A (Git-Driven Markdown + Frontmatter)
* **Why it's best for a software engineer:**
  * You write articles in VS Code using Markdown.
  * You commit your `.md` file to git.
  * Your portfolio rebuilds or dynamically loads it at runtime.
  * Zero database fees, zero CMS downtime, 100% ownership of your words.

---

## 3. Dynamic Article File Format (Specification)

Every article will live in `src/assets/posts/{slug}.md`:

```markdown
---
title: "How We Optimized EF Core Queries for High-Frequency Retail Systems"
slug: "optimizing-ef-core-queries-retail-systems"
publishedDate: "2026-11-15"
category: "Database & Performance"
tags: ["C#", "EF Core", "SQL Server", "Performance"]
summary: "A practical deep dive into query compilation, AsNoTracking, split queries, and index tuning in high-frequency retail transactions."
---

# Introduction

In multi-branch retail environments, database query latency directly impacts checkout speed...

```csharp
var ledger = await _context.StoreLedgers
    .AsNoTracking()
    .AsSplitQuery()
    .Where(x => x.BranchId == branchId)
    .Select(StoreLedgerProjections.ToDto)
    .FirstOrDefaultAsync(cancellationToken);
```

## Key Architectural Takeaways
1. Always project directly to DTOs on read paths.
2. Use split queries for 1-to-many child collections.
```

---

## 4. Newsletter Integration Blueprint

### Service Provider: Buttondown / Substack (Free Tier)
* **How it works:**
  * Readers enter their email in the portfolio newsletter box.
  * Angular sends a direct AJAX request to your newsletter endpoint:
    `POST https://api.buttondown.email/v1/subscribers` with `{ "email": userEmail }`.
  * The user gets an immediate confirmation without ever leaving your portfolio.
  * When you publish a new article, you can either cross-post it or have your newsletter automatically ingest your portfolio's RSS feed (`/feed.xml`).

---

## 5. Phased Activation Steps (When Ready to Launch)

| Phase | Action Item | Technical Details |
| :--- | :--- | :--- |
| **Phase 1** | **Enable Dedicated Route** | Add route `{ path: 'writing', component: WritingList }` and `{ path: 'writing/:slug', component: ArticleReader }`. |
| **Phase 2** | **Dynamic Markdown Parser** | Add `ngx-markdown` or native markdown-to-HTML parser with Prism.js for C#, SQL, and Bash syntax highlighting. |
| **Phase 3** | **Newsletter Webhook** | Connect the subscription form to your live Substack or Buttondown publication account. |
| **Phase 4** | **Re-add to Navigation** | Restore the `04 Writing` link to the main navigation header. |

---

## 6. Current State & Safety

* The components (`src/app/features/writing/` and `src/app/core/data/articles.ts`) have been cleanly decoupled from the active portfolio view.
* The portfolio currently displays **Hero**, **About & Skills**, **Professional Experience**, **Selected Projects**, and **Contact & Connect**.
* Nothing was lost; the writing code and deep-dive content are fully preserved and ready to be reactivated on demand.

