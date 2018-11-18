import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscriber } from 'rxjs';
import LogService from '../../services/log.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }




}
