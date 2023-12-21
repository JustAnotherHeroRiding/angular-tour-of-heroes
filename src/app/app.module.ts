import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroComponent} from './heroes/hero/hero.component';
import {HeroDetailsComponent} from './heroes/hero-details/hero-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AsyncPipe, CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailsComponent,
    NavBarComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AsyncPipe,
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
