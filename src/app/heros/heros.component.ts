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
  newHero:Hero = new Hero();
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
  add(){
    if(this.newHero.name){
      this.heroService.addHero(this.newHero).subscribe(_=>{
        this.getHeros();
        this.hero.name=""
      })
    }
  }
  delete(hero:Hero){
    this.heroService.deleteHero(hero).subscribe(_=>{
      this.getHeros();
    })
  }


}
