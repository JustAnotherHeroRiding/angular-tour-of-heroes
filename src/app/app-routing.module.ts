import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HomeComponent} from './home/home.component';
import {HeroDetailsComponent} from './heroes/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'heroes', component: HeroesComponent, children: [
      {
        path: ':id',
        component: HeroDetailsComponent
      }
    ]
  }, {
    path: 'news', loadChildren: () => import('./news/weather.module').then(m => m.WeatherModule)
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
