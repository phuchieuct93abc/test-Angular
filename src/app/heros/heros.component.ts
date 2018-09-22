import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero: Hero = new Hero();
  selectedHero: Hero;
  heros: Hero[];
  constructor(private heroService: HeroService,private messageService:MessageService) {
    this.hero.name = "Hero name";
  }
  ngOnInit() { 
    this.getHeros()
  }
  choose(hero: Hero) {
    this.messageService.add(`Choose hero: ${hero.name}`)
    this.selectedHero = hero;
  }
  getHeros(){
    this.heroService.getHeros().subscribe(heroes=>{
      this.heros = heroes;
    });
  }


}
