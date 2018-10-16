import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Banana', 20)
  ];
  ingredient: Ingredient = new Ingredient('', 0);
  constructor() { }

  ngOnInit() {
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
