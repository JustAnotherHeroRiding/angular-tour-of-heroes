import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';

const routes: Route[] = [
  {
    path: 'home', component: WeatherComponent,
  },
  {
    path: '**', redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WeatherRoutingModule {

}
