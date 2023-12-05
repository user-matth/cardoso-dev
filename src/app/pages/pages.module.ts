import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MediakitComponent } from './components/mediakit/mediakit.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { StackComponent } from './components/stack/stack.component';
import { SetupComponent } from './components/setup/setup.component';

@NgModule({
  declarations: [
    HomeComponent,
    MediakitComponent,
    AboutMeComponent,
    ProjectsComponent,
    PodcastsComponent,
    StackComponent,
    SetupComponent
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class PagesModule { }
