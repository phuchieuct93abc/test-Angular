import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROS } from './models/mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeros():Hero[]{
    return HEROS;
  }
}
