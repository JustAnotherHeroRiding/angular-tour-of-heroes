import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';
import {Hero} from '../../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes/heroes.service';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements AfterContentInit {

  @Input() hero?: Hero;
  @ContentChild('title') customContent?: ElementRef;

  constructor(
    private _route: ActivatedRoute,
    private _heroesService: HeroesService,
  ) {
    const id = +this._route.snapshot.params['id'];
    this.hero = this._heroesService.findById(id);
    console.log(this.hero, 'found the hero')
  }

  ngAfterContentInit(): void {
    const title = this.customContent?.nativeElement.textContent;
    console.log(title);
  }

}
