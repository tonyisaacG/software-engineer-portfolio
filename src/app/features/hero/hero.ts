import { Component } from '@angular/core';
import { profile } from '../../core/data/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = profile;
}
