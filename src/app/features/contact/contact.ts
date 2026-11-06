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
  protected readonly formSubmitted = signal(false);

  protected copyEmail(): void {
    navigator.clipboard.writeText(this.profile.email).then(() => {
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2500);
    });
  }

  protected onSubmitMessage(event: Event): void {
    event.preventDefault();
    const name = this.senderName().trim();
    const email = this.senderEmail().trim();
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(
      `Hi Antony,\n\n${this.senderMessage()}\n\nBest regards,\n${name}\nEmail: ${email}`
    );

    // Open email client with pre-filled content
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.formSubmitted.set(true);
  }
}
