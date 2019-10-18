import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MusicComponent} from './music/music.component';
import {ProjectsComponent} from './projects/projects.component';
import {LegalComponent} from './legal/legal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
