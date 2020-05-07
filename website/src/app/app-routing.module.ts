import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent, ContactComponent, MusicComponent, ProjectsComponent, LegalComponent, PageNotFoundComponent} from './components';

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
