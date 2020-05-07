import { Component, OnInit } from '@angular/core';
import {
  faGlobeEurope, faGlobeAmericas, faLaptopCode, faTasks, faEdit, faCalendarMinus, faCalendarPlus, faCalendarCheck,
  faCalendarAlt, faCogs, faUser, faUsers, faTools, faLevelDownAlt, faLevelUpAlt
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
  faCalendarMinus = faCalendarMinus;
  faCalendarCheck = faCalendarCheck;
  faCalendarAlt = faCalendarAlt;
  faCogs = faCogs;
  faUser = faUser;
  faUsers = faUsers;
  faTools = faTools;
  faLevelDownAlt = faLevelDownAlt;
  faLevelUpAlt = faLevelUpAlt;

  data: Array<{ imageSrc: string, imageSrcSet: string, imageAlt: string, headline: string, description: string,
    technology: string, status: string, link: string, linkIcon, github: string, projectType: string}> = [
      {
        imageSrc: null, imageSrcSet: 'assets/img/home/network-280.jpg 280w, assets/img/home/network-440.jpg 440w, ' +
          'assets/img/home/network-800.jpg 800w', imageAlt: 'network image', headline: 'This Website',
        description: 'This website has been made to replace the old, ugly prototype. In addition, this has been an exercise to\n' +
          '            improve my frontend skills. This particularly includes CSS3 and working with the Angular framework. Moreover,\n' +
          '            social sharing, search engine optimization and performance have been focused.',
        technology: 'Angular', status: 'In Progress', link: 'http://thom4s.bplaced.net', linkIcon: 'faGlobeEurope',
        github: 'https://github.com/TBernwinkler/my-website', projectType: 'Private'
      },
      {
        imageSrc: 'assets/img/projects/transite-logo.svg', imageSrcSet: null, imageAlt: 'Transite logo', headline: 'Transite',
        description: 'Some rough description .... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum ' +
          'et quasi velit voluptatum cum maiores exercitationem.', technology: 'R, Bash', status: 'Done', link: 'https://transite.mit.edu',
        linkIcon: 'faGlobeAmericas', github: null, projectType: 'Collaboration: MIT'
      }
      ];

  constructor() { }

  ngOnInit() {
  }

}
