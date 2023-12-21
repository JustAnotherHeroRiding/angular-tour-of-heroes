import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {New} from '../new.interface';

@Injectable({providedIn: 'root'})
export class WeatherService {


  readonly path = 'https://api.api-ninjas.com/v1/weather'

  constructor(
    private _http: HttpClient
  ) {
    console.log('NewsService')
  }

  getWeather(city: string): Observable<New> {
    const header = new HttpHeaders({
      'X-Api-Key': '8UV4ewqmzr6TFSdGpNuZVQ==QMTFEQjLXUW3DWsh'
    });
    return this._http.get<New>(`${this.path}?city=${city}`, {headers: header});
  }


}
