import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {ContactComponent, HomeComponent, LegalComponent, MusicComponent, PageNotFoundComponent, ProjectsComponent} from '@app/components';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SafePipe} from '@app/pipes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  CheckboxComponent,
  DialogComponent,
  FooterComponent,
  HeaderComponent,
  HeroComponent
} from '@app/components/sub-components';
import {
  TopButtonComponent
} from '@app/components/base-elements'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {AddVideoComponent, DeleteVideoComponent, ImportExportComponent} from '@app/components/sub-components/music';
import {MatTableModule} from '@angular/material/table';
import { AccordionComponent } from './components/sub-components/accordion/accordion.component';
import { TrackListComponent } from './components/sub-components/music/track-list/track-list.component';
import { InputGroupComponent } from './components/base-elements/text-input/input-group.component';

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
    ImportExportComponent,
    CheckboxComponent,
    HeroComponent,
    TopButtonComponent,
    AddVideoComponent,
    DeleteVideoComponent,
    AccordionComponent,
    TrackListComponent,
    InputGroupComponent
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
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule
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
