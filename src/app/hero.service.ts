import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROS } from './models/mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add("Hero service: fetch heroes");
    return of(HEROS);
  }
}
