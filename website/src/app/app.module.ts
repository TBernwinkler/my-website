import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LegalComponent,
    MusicComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for compilation
// make sure the correct path based on the web server directory is set
export function HttpLoaderFactory(http: HttpClient) {
  // PROD
  // return new TranslateHttpLoader(http, '/temp/website/assets/i18n/', '.json');
  // LOCAL
  return new TranslateHttpLoader(http);
}
