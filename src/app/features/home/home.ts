import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [Hero, About],
  templateUrl: './home.html',
})
export class Home {}
