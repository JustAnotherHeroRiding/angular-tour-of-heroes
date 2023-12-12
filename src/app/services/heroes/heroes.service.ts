import {Injectable} from '@angular/core';
import {Hero} from '../../hero';
import {HEROES} from '../../mock-heroes';

@Injectable({providedIn: 'root'})
export class HeroesService {

  constructor() {
    console.log('Init [HeroesService]')
  }

  findAllHeroes(): Hero[] {
    // backend
    return HEROES;
  }

  findById(id: number) {
    return HEROES.find(hero => hero.id === id);
  }
}
