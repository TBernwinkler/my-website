import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ContactComponent,
  HomeComponent,
  LegalComponent,
  MusicComponent,
  PageNotFoundComponent,
  ProjectsComponent
} from '@app/pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
