
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
//import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    //RouterModule,
    FormsModule
  ],
  declarations: [
    AppComponent, //  <---- Must include the AppComponent which is the main component of the application.
    HeroesComponent, 
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
