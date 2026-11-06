import { Component } from '@angular/core';

interface FocusArea {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly focusAreas: FocusArea[] = [
    {
      title: 'Backend Engineering',
      description: 'C#, ASP.NET Core, REST API design.',
    },
    {
      title: 'Database Engineering',
      description: 'SQL Server, Entity Framework Core.',
    },
    {
      title: 'Frontend Development',
      description: 'Angular, TypeScript.',
    },
    {
      title: 'Software Architecture',
      description: 'Clean Architecture, DDD, CQRS.',
    },
    {
      title: 'Integrations',
      description: 'Third-party APIs and business systems.',
    },
    {
      title: 'Infrastructure',
      description: 'Linux, Nginx, Redis, CI/CD.',
    },
  ];

  protected readonly interests: string[] = [
    'API and integration design',
    'Maintainable architecture',
    'Performance and reliability',
    'Developer tooling',
    'Practical learning through building',
  ];
}
