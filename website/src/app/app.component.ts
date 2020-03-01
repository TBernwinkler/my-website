import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const language = navigator.language;
    if (language && language.startsWith('de')) {
      translate.setDefaultLang('de');
    } else {
      translate.setDefaultLang('en');
    }
  }

  title = 'website';

   useLanguage(language: string) {
    this.translate.use(language);
  }
}
