import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {
  catchError,
  debounceTime,
  EMPTY,
  map,
  mergeMap,
  Observable,
  of,
  retry,
  Subject,
  switchMap,
} from 'rxjs';
import { New } from '../new.interface';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'news',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  new?: New;
  newsSender$ = new Subject<string>();
  cityForm = new UntypedFormControl(null);

  constructor(private _newsService: WeatherService) {}

  ngOnInit(): void {
    // If a request fails it should be handled inside of the switchMap operator
    // Previously the catchError set outside of the switchMap so it closed the pipe
    // Now we have a second pipe inside the switchMap which will close the inner pipe
    // But the outer pipe listening for requests remains and we are still listening for requests
    this.newsSender$
      .pipe(
        switchMap((city) =>
          this._newsService.getWeather(city).pipe(
            catchError((err) => {
              console.error('Request failed, error: ', err);
              return of(undefined);
            })
          )
        )
      )
      .subscribe({
        next: (data) => {
          if (data) {
            this.new = data;
          } else {
            console.log('Received no data for the city');
          }
        },
        error: (err) => console.error('Stream error: ', err),
      });

    this.newsSender$.next('Skopje');

    this.cityForm.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (city) => this.newsSender$.next(city),
    });
  }

  refresh() {
    this.newsSender$.next(this.cityForm.value);
  }
}
