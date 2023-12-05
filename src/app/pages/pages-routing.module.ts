import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MediakitComponent } from './components/mediakit/mediakit.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { StackComponent } from './components/stack/stack.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mediakit', component: MediakitComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'podcasts', component: PodcastsComponent },
  { path: 'stack', component: StackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
