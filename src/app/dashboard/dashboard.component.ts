import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Observable<Hero[]>;
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroes =this.heroService.getHeros();
  }

}
