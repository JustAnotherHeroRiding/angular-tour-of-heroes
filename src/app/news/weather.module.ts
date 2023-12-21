import {NgModule} from '@angular/core';
import {WeatherComponent} from './weather/weather.component';
import {WeatherRoutingModule} from './weather-routing.module';
import {WeatherService} from './services/weather.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const imports = [];
const declarations = [];
const provider = [];

@NgModule({
  imports: [WeatherRoutingModule, AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  declarations: [
    WeatherComponent
  ],
  exports: []
})
export class WeatherModule {

}
