import { RecipeService } from './../../../shared/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeAdded: EventEmitter<Recipe>;

  newRecipe: Recipe;
  constructor(private recipeService: RecipeService) {
    this.recipeAdded = new EventEmitter();
  }

  ngOnInit() {
    this.newRecipe = new Recipe(null, null, null);
  }
  onAddRecipe() {
    // this.recipeAdded.emit(this.newRecipe);
    this.recipeService.registerRecipeCreated().next(this.newRecipe);
    this.newRecipe = new Recipe(null, null, null);
  }
}
