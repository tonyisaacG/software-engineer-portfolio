import { Component } from '@angular/core';
import { profile } from '../../../core/data/profile';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();

  protected hasLink(url: string | undefined): boolean {
    return !!url;
  }
}
