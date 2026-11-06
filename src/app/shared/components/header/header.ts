import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

interface NavItem {
  label: string;
  href: string;
  implemented: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly themeService = inject(ThemeService);

  protected readonly theme = this.themeService.theme;
  protected readonly menuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { label: 'About', href: '#about', implemented: true },
    { label: 'Experience', href: '#experience', implemented: false },
    { label: 'Projects', href: '#projects', implemented: false },
    { label: 'Case Studies', href: '#case-studies', implemented: false },
    { label: 'Writing', href: '#writing', implemented: false },
    { label: 'Contact', href: '#contact', implemented: false },
  ];

  protected toggleTheme(): void {
    this.themeService.toggle();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
