import {ProjectStatus} from './project-status';
import {NameIconPair} from './nameIconPair';

export class Project {

  constructor(imageSrc: string, imageSrcSet: string, imageAlt: string, title: string, description: string,
              technologies: Array<NameIconPair>, status: ProjectStatus, link: string, linkIcon: string,
              github: string, partner: string, audience: Array<NameIconPair>) {
    this.imageSrc = imageSrc;
    this.imageSrcSet = imageSrcSet;
    this.imageAlt = imageAlt;
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.status = status;
    this.link = link;
    this.linkIcon = linkIcon;
    this.github = github;
    this.partner = partner;
    this.audience = audience;
  }

  imageSrc: string;
  imageSrcSet: string;
  imageAlt: string;
  title: string;
  description: string;
  technologies: Array<NameIconPair>;
  status: ProjectStatus;
  link: string;
  linkIcon: string;
  github: string;
  partner: string; // collaboration Vs. standalone defined by filled Vs. empty string respectively
  audience: Array<NameIconPair>;
}
