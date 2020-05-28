import {Project} from './project';
import {ProjectStatus} from './project-status';
import {faAndroid, faAngular, faCss3Alt, faHtml5, faJava, faJsSquare, faPython} from '@fortawesome/free-brands-svg-icons';
import {faCommentsDollar, faDesktop, faFlask, faLaptopCode, faMobile, faTablet} from '@fortawesome/free-solid-svg-icons';

export class ProjectProvider {

  private static projects: Array<Project> = [
    {
      imageSrc: 'assets/img/projects/markup.jpg',
      imageSrcSet: null,
      imageAlt: 'network image',
      title: 'projects.project1.title',
      description: 'projects.project1.description',
      technologies:
      [
        {name: 'Angular', icon: faAngular}
      ],
      status: ProjectStatus.InProgress,
      link: 'http://thom4s.bplaced.net',
      linkIcon: 'faGlobeEurope',
      github: 'https://github.com/TBernwinkler/my-website',
      partner: null,
      audience: [
        {name: 'recruiting', icon: faCommentsDollar},
        {name: 'userPC', icon: faDesktop},
        {name: 'userTablet', icon: faTablet},
        {name: 'userPhone', icon: faMobile}
      ]
    },
    {
      imageSrc: 'assets/img/projects/transite-logo.svg',
      imageSrcSet: null,
      imageAlt: 'Transite logo',
      title: 'projects.project2.title',
      description: 'projects.project2.description',
      technologies:
      [
        {name: 'R', icon: null},
        {name: 'Bash', icon: null}
      ],
      status: ProjectStatus.Done,
      link: 'https://transite.mit.edu',
      linkIcon: 'faGlobeAmericas',
      github: null,
      partner: 'MIT',
      audience: [
        {name: 'researcher', icon: faFlask}
      ]
    },
    {
      imageSrc: 'assets/img/projects/logo-scansite.png',
      imageSrcSet: null,
      imageAlt: 'Scansite logo',
      title: 'projects.project3.title',
      description: 'projects.project3.description',
      technologies: [
        {name: 'Maven', icon: null},
        {name: 'Java', icon: faJava},
        {name: 'HTML', icon: faHtml5},
        {name: 'CSS', icon: faCss3Alt},
        {name: 'JavaScript', icon: faJsSquare}
      ],
      status: ProjectStatus.Pending,
      link: 'https://scansite.mit.edu',
      linkIcon: 'faGlobeAmericas',
      github: 'https://github.com/kkrismer/scansite4',
      partner: 'MIT',
      audience: [
        {name: 'researcher', icon: faFlask}
      ]
    },
    {
      imageSrc: 'assets/img/projects/biodapps-logo.png',
      imageSrcSet: null,
      imageAlt: 'BioDApps logo',
      title: 'projects.project4.title',
      description: 'projects.project4.description',
      technologies:
        [
          {name: 'Python', icon: faPython},
          {name: 'Anguar', icon: faAngular}
        ],
      status: ProjectStatus.Pending,
      link: null,
      linkIcon: 'faGlobeEurope',
      github: null,
      partner: 'University of Salzburg',
      audience: [
        {name: 'researcher', icon: faFlask}
      ]
    },
    {
      imageSrc: null,
      imageSrcSet: 'assets/img/home/network-280.jpg 280w, assets/img/home/network-440.jpg 440w, assets/img/home/network-800.jpg 800w',
      imageAlt: null,
      title: 'projects.project5.title',
      description: 'projects.project5.description',
      technologies:
        [
          {name: 'Maven', icon: null},
          {name: 'Java', icon: faJava},
          {name: 'Spring', icon: null},
          {name: 'Angular', icon: faAngular}
        ],
      status: ProjectStatus.Pending,
      link: null,
      linkIcon: 'faGlobeEurope',
      github: 'https://github.com/TBernwinkler/programming-test',
      partner: null,
      audience: [
        {name: 'recruiting', icon: faCommentsDollar },
        {name: 'developer', icon: faLaptopCode}
      ]
    },
    {
      imageSrc: 'assets/img/projects/android.jpg',
      imageSrcSet: null,
      imageAlt: null,
      title: 'projects.project6.title',
      description: 'projects.project6.description',
      technologies:
        [
          {name: 'Android', icon: faAndroid},
          {name: 'Java', icon: faJava},
          {name: 'XML', icon: null}
        ],
      status: ProjectStatus.Planned,
      link: null,
      linkIcon: 'faGlobeEurope',
      github: null,
      partner: null,
      audience: [
        {name: 'userAndroid', icon: faAndroid}
      ]
    }
  ];

  public static getProjects() {
    return this.projects;
  }
}
