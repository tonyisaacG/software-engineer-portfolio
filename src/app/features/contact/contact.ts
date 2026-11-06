import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { profile } from '../../core/data/profile';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = profile;

  protected readonly senderName = signal('');
  protected readonly senderEmail = signal('');
  protected readonly senderMessage = signal('');
  protected readonly copiedEmail = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly formSubmitted = signal(false);
  protected readonly submitError = signal<string | null>(null);

  private successTimeoutId?: ReturnType<typeof setTimeout>;

  protected dismissSuccess(): void {
    if (this.successTimeoutId) {
      clearTimeout(this.successTimeoutId);
    }
    this.formSubmitted.set(false);
  }

  protected copyEmail(): void {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2500);
    });
  }

  protected async onSubmitMessage(event: Event): Promise<void> {
    event.preventDefault();

    const name = this.senderName().trim();
    const email = this.senderEmail().trim();
    const message = this.senderMessage().trim();

    if (!name || !email || !message) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '7732222e-8b7a-4424-a08c-e4b13823ab1f',
          name,
          email,
          message,
          subject: `Portfolio Message from ${name}`,
          from_name: name,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        this.formSubmitted.set(true);
        this.senderName.set('');
        this.senderEmail.set('');
        this.senderMessage.set('');

        if (this.successTimeoutId) {
          clearTimeout(this.successTimeoutId);
        }
        this.successTimeoutId = setTimeout(() => {
          this.formSubmitted.set(false);
        }, 30000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      // Fallback: Open Gmail directly if network/CORS issues occur
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(
        `Hi Antony,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.profile.email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank');
      this.submitError.set('Could not send directly via API. Opened Gmail composer as fallback.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
