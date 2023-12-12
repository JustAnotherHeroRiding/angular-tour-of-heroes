import {Component, ViewEncapsulation} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroesService} from '../services/heroes/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {

  heroes: Hero[];
  selectedHero?: Hero;

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.heroes = _heroesService.findAllHeroes();
  }

  selectHero(hero: Hero) {
    console.log('hero select', hero);
    this.selectedHero = hero;
    this._router.navigate([hero.id], {
      relativeTo: this._route
    });
  }
}
