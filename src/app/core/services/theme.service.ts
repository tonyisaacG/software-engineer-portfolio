import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<Theme>(this.resolveInitialTheme());
  readonly theme = this._theme.asReadonly();

  constructor() {
    this.applyTheme(this._theme());
  }

  toggle(): void {
    this.setTheme(this._theme() === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable (e.g. private mode); theme still applies for the session.
    }
    this.applyTheme(theme);
  }

  private resolveInitialTheme(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // Ignore storage errors and fall back to system preference.
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return 'light';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.dataset['theme'] = theme;
  }
}
