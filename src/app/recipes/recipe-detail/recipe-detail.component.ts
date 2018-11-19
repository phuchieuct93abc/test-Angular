import { IngredientService } from './../../services/ingredient.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {

  }

  addIngredients() {
    this.ingredientService.addIngredients(this.recipe.ingredients);
  }
}
