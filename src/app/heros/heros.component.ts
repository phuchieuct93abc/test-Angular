import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROS } from '../models/mock-heros';
 
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero:Hero=new Hero();
  selectedHero:Hero;
  heros = HEROS;
  constructor() { 
    this.hero.name="Hero name"


  }
  ngOnInit(){}
  choose(hero:Hero){
    this.selectedHero = hero;
  }


}
