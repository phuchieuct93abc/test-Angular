import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredientUpdated = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient(1, 'Apple', 10),
    new Ingredient(2, 'Banana', 20)
  ];

  getIngredient(): Ingredient[] {
    return this.ingredients.slice();
  }

  updateIngredient(ingredient: Ingredient) {
    if (ingredient.id) {
      this.editIngredient(ingredient);
    } else {
      this.addIngredient(ingredient);
    }
    this.ingredientUpdated.next(this.getIngredient());
  }

  addIngredient(ingredient: Ingredient) {
    const nextId = this.getNextId();
    ingredient.id = nextId;
    this.ingredients.push(ingredient);
  }

  getNextId() {
    return this.getIngredient().reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.id), 0) + 1;
  }

  editIngredient(ingredient: Ingredient) {
    const index = this.getIngredient().findIndex(i => i.id === ingredient.id);
    this.ingredients[index] = ingredient;

  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(i => this.updateIngredient(i));
    this.ingredientUpdated.next(this.getIngredient());
  }

  getIngredientById(id: number): Ingredient {
    return this.getIngredient().find(i => i.id == id);
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
    this.ingredientUpdated.next(this.ingredients.slice());
  }


}
