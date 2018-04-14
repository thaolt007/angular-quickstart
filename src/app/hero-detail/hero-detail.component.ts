import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }
  getHero(id: number) {
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
  }
}
