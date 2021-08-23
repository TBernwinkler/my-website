import {Project} from './project';
import {ProjectStatus} from './project-status';
import {faAndroid, faAngular, faCss3Alt, faHtml5, faJava, faJsSquare, faPython} from '@fortawesome/free-brands-svg-icons';
import {faCommentsDollar, faDesktop, faFlask, faLaptopCode, faMobile, faTablet} from '@fortawesome/free-solid-svg-icons';

export class ProjectProvider {

  private static projects: Array<Project> = [
    {
      imageSrc: '',
      imageSrcSet: 'assets/img/projects/markup576.jpg 576w, assets/img/projects/markup768.jpg 768w, ' +
        'assets/img/projects/markup992.jpg 992w, assets/img/projects/markup1200.jpg 1200w',
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
      partner: '',
      audience: [
        {name: 'recruiting', icon: faCommentsDollar},
        {name: 'userPC', icon: faDesktop},
        {name: 'userTablet', icon: faTablet},
        {name: 'userPhone', icon: faMobile}
      ]
    },
    {
      imageSrc: 'assets/img/projects/transite-logo.svg',
      imageSrcSet: '',
      imageAlt: 'Transite logo',
      title: 'projects.project2.title',
      description: 'projects.project2.description',
      technologies:
      [
        {name: 'R'},
        {name: 'Bash'}
      ],
      status: ProjectStatus.Done,
      link: 'https://transite.mit.edu',
      linkIcon: 'faGlobeAmericas',
      github: '',
      partner: 'Massachusetts Institute of Technology',
      audience: [
        {name: 'researcher', icon: faFlask}
      ]
    },
    {
      imageSrc: 'assets/img/projects/logo-scansite.png',
      imageSrcSet: '',
      imageAlt: 'Scansite logo',
      title: 'projects.project3.title',
      description: 'projects.project3.description',
      technologies: [
        {name: 'Maven'},
        {name: 'Java', icon: faJava},
        {name: 'HTML', icon: faHtml5},
        {name: 'CSS', icon: faCss3Alt},
        {name: 'JavaScript', icon: faJsSquare}
      ],
      status: ProjectStatus.Pending,
      link: 'https://scansite.mit.edu',
      linkIcon: 'faGlobeAmericas',
      github: 'https://github.com/kkrismer/scansite4',
      partner: 'Massachusetts Institute of Technology',
      audience: [
        {name: 'researcher', icon: faFlask}
      ]
    },
    {
      imageSrc: 'assets/img/projects/biodapps-logo.png',
      imageSrcSet: '',
      imageAlt: 'BioDApps logo',
      title: 'projects.project4.title',
      description: 'projects.project4.description',
      technologies:
        [
          {name: 'Python', icon: faPython},
          {name: 'Anguar', icon: faAngular}
        ],
      status: ProjectStatus.Pending,
      link: '',
      linkIcon: 'faGlobeEurope',
      github: '',
      partner: 'University of Salzburg',
      audience: [
        {name: 'researcher', icon: faFlask}
      ]
    },
    {
      imageSrc: '',
      imageSrcSet: 'assets/img/home/network-280.jpg 280w, assets/img/home/network-440.jpg 440w, assets/img/home/network-800.jpg 800w',
      imageAlt: '',
      title: 'projects.project5.title',
      description: 'projects.project5.description',
      technologies:
        [
          {name: 'Maven'},
          {name: 'Java', icon: faJava},
          {name: 'Spring'},
          {name: 'Angular', icon: faAngular}
        ],
      status: ProjectStatus.Pending,
      link: '',
      linkIcon: 'faGlobeEurope',
      github: 'https://github.com/TBernwinkler/programming-test',
      partner: '',
      audience: [
        {name: 'recruiting', icon: faCommentsDollar },
        {name: 'developer', icon: faLaptopCode}
      ]
    },
    {
      imageSrc: '',
      imageSrcSet: 'assets/img/projects/android576.jpg 576w, assets/img/projects/android768.jpg 768w, ' +
        'assets/img/projects/android992.jpg 992w, assets/img/projects/android1200.jpg 1200w',
      imageAlt: '',
      title: 'projects.project6.title',
      description: 'projects.project6.description',
      technologies:
        [
          {name: 'Android', icon: faAndroid},
          {name: 'Java', icon: faJava},
          {name: 'XML'}
        ],
      status: ProjectStatus.Planned,
      link: '',
      linkIcon: 'faGlobeEurope',
      github: '',
      partner: '',
      audience: [
        {name: 'userAndroid', icon: faAndroid}
      ]
    }
  ];

  public static getProjects() {
    return this.projects;
  }
}
