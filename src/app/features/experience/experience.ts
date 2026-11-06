import { Component } from '@angular/core';
import { profile } from '../../core/data/profile';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly profile = profile;
}
