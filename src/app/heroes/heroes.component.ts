import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // heroselected: Hero;
  // setHeroSelected(hero: Hero): void {
  //   this.heroselected = hero;
  // }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
