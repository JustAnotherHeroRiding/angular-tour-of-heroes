import {Injectable} from '@angular/core';
import {Hero} from '../../hero';
import {HEROES} from '../../mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor() {
    console.log('Init [HeroesService]')
  }

  findAllHeroes(): Hero[] {
    // backend
    return HEROES;
  }

  findById(id: number): Observable<Hero | undefined> {
    return of<Hero | undefined>(HEROES.find(hero => hero.id === id));
  }
}
