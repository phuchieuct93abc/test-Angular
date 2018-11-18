import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({ providedIn: 'root' })
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Recipe name 1', 'desc 1', 'https://lorempixel.com/420/320/',
            [new Ingredient('Meat', 2), new Ingredient('Beef', 10)]),
        new Recipe('Recipe name 2', 'desc 2', 'https://lorempixel.com/420/320/',
            [new Ingredient('Banana', 2), new Ingredient('Orange', 10)])
    ];

    recipeSelected = new Subject<Recipe>();
    getRecipe() {
        return this.recipes.slice();
    }
}
