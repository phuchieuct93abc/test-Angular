import { IngredientService } from './../services/ingredient.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient = new Ingredient('', 0);
  ingredients: Ingredient[];
  constructor(private ingredientService: IngredientService) {
  }
  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredient();
    this.ingredientService.ingredientUpdated.subscribe(ingredients => this.ingredients = ingredients);
  }

  onSelecteIngredient(ingredient: Ingredient) {
    this.ingredient = ingredient;
  }
  ingredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
  ingredientDeleted(deletedIngredient: Ingredient) {
    const index = this.ingredients.indexOf(deletedIngredient);
    this.ingredients.splice(index, 1);

  }



}
