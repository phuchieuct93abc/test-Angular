import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../recipe.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
    this.recipeService.onUpdateRecipe.subscribe(() => {
      this.recipes = this.recipeService.getRecipes();

    });
  }


}

