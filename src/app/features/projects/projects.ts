import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { profile } from '../../core/data/profile';

@Component({
  selector: 'app-projects',
  imports: [DecimalPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly profile = profile;
}
