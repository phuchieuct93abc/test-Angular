import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../models/hero';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  searchValue:string;
  heroes$:Observable<Hero[]>
  private searchTerms= new Subject<string>()
  constructor(private heroService:HeroService) { }
    
  search(){ 
    this.searchTerms.next(this.searchValue);
    
  }
  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) =>  {
        console.log("map")
       return this.heroService.searchHeroes(term)

      }     )
      
      )
  
  }

}
