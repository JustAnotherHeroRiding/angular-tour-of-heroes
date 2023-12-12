import {Component, ViewEncapsulation} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroesService} from '../services/heroes/heroes.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {

  heroes: Hero[];
  selectedHero?: Hero;

  constructor(
    private _heroesService: HeroesService
  ) {
    this.heroes = _heroesService.findAllHeroes();
  }

  selectHero(hero: Hero) {
    console.log('hero select', hero);
    this.selectedHero = hero;
  }
}
