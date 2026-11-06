import { Component } from '@angular/core';
import { profile } from '../../core/data/profile';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly profile = profile;
}

