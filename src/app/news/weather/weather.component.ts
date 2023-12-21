import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {catchError, debounceTime, EMPTY, map, mergeMap, Observable, of, retry, Subject, switchMap} from 'rxjs';
import {New} from '../new.interface';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'news',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  new? : New;
  newsSender$ = new Subject<string>();
  cityForm = new UntypedFormControl(null);

  constructor(
    private _newsService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.newsSender$.pipe(
      switchMap((city) => this._newsService.getWeather(city)),
      catchError(() => {
        console.error('Wrong city please try again');
        return of(undefined)
      }),
    ).subscribe(
      {
        next: (data) => this.new = data,
        error: () => console.log('error')
      }
    );
    this.newsSender$.next('Skopje');

    this.cityForm.valueChanges.pipe(
      debounceTime(500),
    ).subscribe({
      next:(city) => this.newsSender$.next(city)
    })

  }

  refresh() {
    this.newsSender$.next(this.cityForm.value);
  }

}
