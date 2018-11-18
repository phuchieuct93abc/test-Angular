import { RecipeService } from './../../../services/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  newRecipe: Recipe;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.newRecipe = new Recipe(null, null, null, []);
  }
  onSelectRecipe() {
    this.recipeService.recipeSelected.next(this.recipe);
  }

}
