import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ContactComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  LegalComponent,
  MusicComponent,
  ProjectsComponent,
  PageNotFoundComponent
} from './components';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxPopper} from 'angular-popper';
import {SafePipe} from './pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ImportExportComponent } from './components/import-export/import-export.component';
import {DialogComponent} from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LegalComponent,
    MusicComponent,
    HomeComponent,
    ProjectsComponent,
    SafePipe,
    PageNotFoundComponent,
    DialogComponent,
    ImportExportComponent
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
    NgxPopper,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }

// required for compilation
// make sure the correct path based on the web server directory is set
export function HttpLoaderFactory(http: HttpClient) {
  // PROD
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
  // LOCAL
  // return new TranslateHttpLoader(http);
}
