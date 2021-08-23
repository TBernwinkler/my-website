import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SafePipe} from '@app/pipes/safe/safe.pipe';
import {
  ContactComponent,
  HomeComponent,
  LegalComponent,
  MusicComponent,
  PageNotFoundComponent,
  ProjectsComponent
} from '@app/pages';
import {
  AccordionComponent,
  AddVideoComponent,
  CheckboxComponent,
  DeleteVideoComponent,
  DialogComponent,
  FooterComponent,
  HeaderComponent,
  HeroComponent,
  ImportExportComponent,
  TrackListComponent
} from '@app/components';
import {InputGroupComponent, TopButtonComponent} from '@app/components/base-components';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import {StoreModule} from '@ngrx/store';
import {reducer} from '@app/video.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';

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
    StoreModule.forRoot({
      // @ts-ignore payload type differences
      videos: reducer
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
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
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }

// DEFINE PATH AND FILE TYPE FOR TRANSLATIONS
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
