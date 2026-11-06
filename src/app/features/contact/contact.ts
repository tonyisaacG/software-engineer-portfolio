import { Component } from '@angular/core';
import { profile } from '../../core/data/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = profile;
}
