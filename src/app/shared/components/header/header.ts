import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { profile } from '../../../core/data/profile';

interface NavItem {
  label: string;
  href: string;
  index: string;
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
  protected readonly profile = profile;

  protected readonly navItems: NavItem[] = [
    { label: 'About', href: '#about', index: '01', implemented: true },
    { label: 'Experience', href: '#experience', index: '02', implemented: false },
    { label: 'Projects', href: '#projects', index: '03', implemented: false },
    { label: 'Case Studies', href: '#case-studies', index: '04', implemented: false },
    { label: 'Writing', href: '#writing', index: '05', implemented: false },
    { label: 'Contact', href: '#contact', index: '06', implemented: false },
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
