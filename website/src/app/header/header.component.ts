import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyGer = 'DE';
  keyEng = 'EN';

  labelsHome = this.defineLabels('Home', 'Home');
  labelsMusic = this.defineLabels('Musik', 'Music');
  labelsContact = this.defineLabels('Kontakt', 'Contact');
  labelsProjects = this.defineLabels('Projekte', 'Projects');

  labelHome = this.retrieveLabel(this.labelsHome);
  labelMusic = this.retrieveLabel(this.labelsMusic);
  labelContact = this.retrieveLabel(this.labelsContact);
  labelProjects = this.retrieveLabel(this.labelsProjects);

  labelGerman = 'Deutsch';
  labelEnglish = 'English';

  isHome = true;
  isMusic = false;
  isProjects = false;
  isContact = false;

  constructor(private lang: LanguageService) {}

  defineLabels(labelDE, labelEN) {
    const obj = {};
    obj[this.keyGer] = labelDE;
    obj[this.keyEng] = labelEN;
    return obj;
  }

  ngOnInit() {
  }

  selectLanguage(lang) {
    this.lang.changeLanguage(lang)

    this.labelHome = this.retrieveLabel(this.labelsHome);
    this.labelMusic = this.retrieveLabel(this.labelsMusic);
    this.labelContact = this.retrieveLabel(this.labelsContact);
    this.labelProjects = this.retrieveLabel(this.labelsProjects);
  }

  selectPage(name) {
    this.isHome = (name === 'home');
    this.isMusic = (name === 'music');
    this.isProjects = (name === 'projects');
    this.isContact = (name === 'contact');
  }

  retrieveLabel(labels) {
    if (this.lang.selectedGerman) {
      return labels[this.keyGer];
    }
    return labels[this.keyEng];
  }

}
