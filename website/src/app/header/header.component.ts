import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faMusic = faMusic;
  faProjectDiagram = faProjectDiagram;
  faAddressBook = faAddressBook;
  faLanguage = faLanguage;
  faBars = faBars;
  faCaretDown = faCaretDown;

  selectedGerman = false;
  labelGerman = 'Deutsch';
  labelEnglish = 'English';

  isHome = true;
  isMusic = false;
  isProjects = false;
  isContact = false;

  showNav = false;
  isShown = false;
  isHidden = true;

  constructor(public app: AppComponent) {}

  ngOnInit() {
  }

  selectPage(name) {
    this.isHome = (name === 'home');
    this.isMusic = (name === 'music');
    this.isProjects = (name === 'projects');
    this.isContact = (name === 'contact');
    this.showNav = false;
  }

  useLanguage(language: string) {
    this.selectedGerman = language === 'de';
    this.app.useLanguage(language);
    this.toggleDropDown();
    this.reset();
  }

  reset() {
    this.isHome = true;
    this.isMusic = false;
    this.isProjects = false;
    this.isContact = false;
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  toggleDropDown() {
    this.isHidden = !this.isHidden;
    this.isShown = !this.isShown;
  }

}
