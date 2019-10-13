import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faLanguage = faLanguage;

  selectedGerman = false;
  labelGerman = 'Deutsch';
  labelEnglish = 'English';

  isHome = true;
  isMusic = false;
  isProjects = false;
  isContact = false;

  constructor(public app: AppComponent) {}

  ngOnInit() {
  }

  selectPage(name) {
    this.isHome = (name === 'home');
    this.isMusic = (name === 'music');
    this.isProjects = (name === 'projects');
    this.isContact = (name === 'contact');
  }

  useLanguage(language: string) {
    this.selectedGerman = language === 'de';
    this.app.useLanguage(language);
  }

}
