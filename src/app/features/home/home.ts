import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Education } from '../education/education';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Projects, Education, Contact],
  templateUrl: './home.html',
})
export class Home {}
