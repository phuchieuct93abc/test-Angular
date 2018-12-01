import {Recipe} from '../recipes/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('1', 'Recipe name 1', 'desc 1', '../assets/image.jpg',
      [new Ingredient('Meat', 2), new Ingredient('Beef', 10)]),
    new Recipe('2', 'Recipe name 2', 'desc 2', '../assets/image.jpg',
      [new Ingredient('Banana', 2), new Ingredient('Orange', 10)])
  ];


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: string) {
    return this.getRecipes().find(recipe => recipe.id === id);
  }
}
