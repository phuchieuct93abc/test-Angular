import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredientUpdated = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Banana', 20)
  ];

  getIngredient(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientUpdated.next(this.getIngredient());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientUpdated.next(this.getIngredient());
  }

  removeIngredient(ingredient: Ingredient) {
    console.log(this.ingredients.indexOf(ingredient));
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
    // this.ingredients.splice(this.ingredients.indexOf(selectedIngredient), /**/1);
    this.ingredientUpdated.next(this.ingredients.slice());
  }

}
