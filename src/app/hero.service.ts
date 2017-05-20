import { Injectable } from '@angular/core'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

  getHeroesSlowly(delay: Number = 2000): Promise<Hero[]> {
    return new Promise((resolve) => {
      // simulate server latency with delay (in milliseconds)
      setTimeout(
        () => {
          resolve(HEROES)
        }, 
        delay
      )
    })
  }
}
