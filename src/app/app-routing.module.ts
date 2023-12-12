import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HomeComponent} from './home/home.component';
import {HeroDetailsComponent} from './heroes/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'heroes', component: HeroesComponent, pathMatch: 'full'
  },
  {
    path: 'heroes/:id', component: HeroDetailsComponent,
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
