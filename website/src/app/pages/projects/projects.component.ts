import {Component, OnInit} from '@angular/core';
import {
  faCalendarAlt,
  faCalendarCheck,
  faCalendarMinus,
  faCog,
  faCogs,
  faGlobeAmericas,
  faGlobeEurope,
  faLaptopCode,
  faTasks,
  faUser,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {NameIconPair, Project, ProjectProvider, ProjectStatus, Renditions} from '@app/models';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // ICONS
  faCog = faCog;
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
  // PROJECT DATA
  statusList: Array<{icon: IconProp, class: string, status: ProjectStatus}> = [];
  data: Array<Project> = [];
  // HERO COMPONENT
  headline: Array<NameIconPair> = [
    {name: 'projects.hero.headline'}
  ];
  description: string = '';
  images: Renditions = {
    mobile: 'projects/diagram-crop576.jpg',
    tablet: 'projects/diagram-crop768.jpg',
    tabletLandscape: 'projects/diagram-crop992.jpg',
    laptop: 'projects/diagram-crop1200.jpg',
    desktop: 'projects/diagram-crop1900.jpg',
    extraLarge: 'projects/diagram-crop4000.jpg'
  };
  imageSource = 'https://www.pexels.com/@divinetechygirl';
  imageOrientation = 'center';

  constructor() { }

  ngOnInit() {
    this.data = ProjectProvider.getProjects();
    this.statusList = [
      {
        icon: this.faCalendarAlt,
        class: 'planned',
        status: ProjectStatus.Planned
      },
      {
        icon: this.faCalendarMinus,
        class: 'pending',
        status: ProjectStatus.Pending
      },
      {
        icon: this.faTasks,
        class: 'progress',
        status: ProjectStatus.InProgress
      },
      {
        icon: this.faCalendarCheck,
        class: 'success',
        status: ProjectStatus.Done
      }
    ];
  }

  getStatusClass(status: ProjectStatus): string {
    let className = 'planned';
    this.statusList.forEach(entry => {
      if (entry.status === status) {
        className = entry.class;
      }
    });
    return className;
  }

  getStatusIcon(status: ProjectStatus): IconProp {
    let icon: IconProp = this.faCalendarAlt;
    this.statusList.forEach(entry => {
      if (entry.status === status) {
        icon = entry.icon;
      }
    });
    return icon;
  }

}
