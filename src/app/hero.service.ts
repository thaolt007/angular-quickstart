import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './heroes-mock';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {extractMessages} from '@angular/compiler/src/i18n/extractor_merger';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Load messages');
    return of(HEROES);
  }

  getHero(id: number): Observable<any> {
    return of(HEROES.find(hero => hero.id === id));
  }
}
