import {IngredientService} from './../services/ingredient.service';
import {Ingredient} from './../shared/ingredient.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredient();
    this.ingredientService.ingredientUpdated.subscribe(ingredients => this.ingredients = ingredients);
  }


}
