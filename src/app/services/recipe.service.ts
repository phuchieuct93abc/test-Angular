import {Recipe} from '../recipes/recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import * as cloneDeep from 'lodash/cloneDeep';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, 'Recipe name 1', 'desc 1', '../assets/image.jpg',
      [new Ingredient(1, 'Meat', 2), new Ingredient(2, 'Beef', 10)]),
    new Recipe(2, 'Recipe name 2', 'desc 2', '../assets/image.jpg',
      [new Ingredient(3, 'Banana', 2), new Ingredient(4, 'Orange', 10)])
  ];


  public onUpdateRecipe = new Subject<Recipe>();

  getRecipes() {
    return cloneDeep(this.recipes);
  }

  getRecipeById(id: number) {

    return cloneDeep(this.getRecipes().find(recipe => recipe.id === id));
  }

  updateRecipe(recipe: Recipe) {
    if (recipe.id == null) {
      this.addRecipe(recipe);
    } else {
      this.editRecipe(recipe);
    }
    this.onUpdateRecipe.next(recipe);
  }

  private addRecipe(newRecipe: Recipe) {
    newRecipe.id = this.findNextId();
    this.recipes.push(newRecipe);
  }

  private editRecipe(recipe: Recipe) {
    const recipeId = recipe.id;
    const originalRecipeIndex: number = this.recipes.findIndex(r => r.id === recipeId);
    this.recipes[originalRecipeIndex] = recipe;

  }

  private findNextId(): number {
    const values: number[] = this.getRecipes().map(r => +r.id);
    return Math.max(...values) + 1;
  }
}

