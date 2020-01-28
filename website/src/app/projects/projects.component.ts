import { Component, OnInit } from '@angular/core';
import {
  faGlobeEurope, faGlobeAmericas, faLaptopCode, faTasks, faEdit, faCalendarMinus, faCalendarPlus, faCalendarCheck,
  faCalendarAlt, faCogs, faUser, faUsers, faTools
} from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faAndroid = faAndroid;
  faAngular = faAngular;
  faGithub = faGithub;
  faGlobeEurope = faGlobeEurope;
  faGlobeAmericas = faGlobeAmericas;
  faLaptopCode = faLaptopCode;
  faTasks = faTasks;
  faEdit = faEdit;
  faCalendarMinus = faCalendarMinus;
  faCalendarPlus = faCalendarPlus;
  faCalendarCheck = faCalendarCheck;
  faCalendarAlt = faCalendarAlt;
  faCogs = faCogs;
  faUser = faUser;
  faUsers = faUsers;
  faTools = faTools;

  constructor() { }

  ngOnInit() {
  }

}
