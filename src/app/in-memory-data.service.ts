import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Shakib Khan' },
      { id: 12, name: 'Hero Alom' },
      { id: 13, name: 'Ferdous Ahmed' },
      { id: 14, name: 'Jashim Bhai' },
      { id: 15, name: 'Bappa Raj' },
      { id: 16, name: 'Razzak' },
      { id: 17, name: 'DIPJOL' },
      { id: 18, name: 'Kazi Maruf' },
      { id: 19, name: 'Jayeed khan' },
      { id: 20, name: 'Marzuk Russell' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
