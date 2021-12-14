import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServise: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageServise.add('HeroService: fetched heroes')

    return heroes;
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find(h => h.id === id);

    this.messageServise.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }
}
