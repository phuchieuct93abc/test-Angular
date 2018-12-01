import {RecipeService} from './../services/recipe.service';
import {Recipe} from './recipe.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }


}
