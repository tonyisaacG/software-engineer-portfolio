import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article, articles } from '../../core/data/articles';

@Component({
  selector: 'app-writing',
  imports: [FormsModule],
  templateUrl: './writing.html',
  styleUrl: './writing.scss',
})
export class Writing {
  protected readonly articles = articles;
  protected readonly activeArticle = signal<Article | null>(null);
  protected readonly subscriberEmail = signal<string>('');
  protected readonly subscriptionStatus = signal<'idle' | 'success' | 'error'>('idle');

  protected openArticle(article: Article): void {
    this.activeArticle.set(article);
    // Lock background scroll when reading
    document.body.style.overflow = 'hidden';
  }

  protected closeArticle(): void {
    this.activeArticle.set(null);
    document.body.style.overflow = '';
  }

  protected onSubscribe(event: Event): void {
    event.preventDefault();
    const email = this.subscriberEmail().trim();
    if (!email || !email.includes('@')) {
      this.subscriptionStatus.set('error');
      return;
    }

    // Client-side acknowledgement (can be hooked to Substack / Buttondown / Beehiiv API)
    this.subscriptionStatus.set('success');
    this.subscriberEmail.set('');
  }
}

