import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../heroes/mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  /*waits for the Observable to emit the array of heroes—
   which could happen now or several minutes from now.
    Then subscribe passes the emitted array to the callback,
     which sets the component's heroes property.*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


/*The parameter simultaneously defines a
 private heroService property and identifies
  it as a HeroService injection site.*/
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

}
