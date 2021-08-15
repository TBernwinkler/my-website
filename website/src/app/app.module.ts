import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SafePipe} from './pipes/safe/safe.pipe';
import {
  ContactComponent,
  HomeComponent,
  LegalComponent,
  MusicComponent,
  PageNotFoundComponent,
  ProjectsComponent
} from '@app/pages';
import {AccordionComponent} from './components/accordion/accordion.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/hero/hero.component';
import {AddVideoComponent} from './components/music-components/add-video/add-video.component';
import {DeleteVideoComponent} from './components/music-components/delete-video/delete-video.component';
import {ImportExportComponent} from './components/music-components/import-export/import-export.component';
import {TrackListComponent} from './components/music-components/track-list/track-list.component';
import {InputGroupComponent} from './components/base-components/input-group/input-group.component';
import {TopButtonComponent} from './components/base-components/top-button/top-button.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HomeComponent,
    MusicComponent,
    ProjectsComponent,
    ContactComponent,
    AccordionComponent,
    CheckboxComponent,
    DialogComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    AddVideoComponent,
    DeleteVideoComponent,
    ImportExportComponent,
    TrackListComponent,
    InputGroupComponent,
    TopButtonComponent,
    LegalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TRANSLATIONS
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    // MATERIAL LIBs
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    DragDropModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// DEFINE PATH AND FILE TYPE FOR TRANSLATIONS
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
