import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule
  ],
  providers: []
})
export class PagesModule { }
