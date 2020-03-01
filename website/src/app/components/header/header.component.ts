import {Component, OnInit} from '@angular/core';
import { AppComponent } from '../../app.component';
import { faHome, faMusic, faProjectDiagram, faAddressBook, faBars, faLanguage, faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
    // "@context": "http://schema.org",
    // "@type": "Website",
    // "name": "Website, Thomas Bernwinkler",
    // "description": "This website gives an overview about Thomas as a person.
    // This also includes software projects and music (i.e. song recommendations)."
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
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  toggleDropDown() {
      this.isHidden = !this.isHidden;
      this.isShown = !this.isShown;
  }

}
