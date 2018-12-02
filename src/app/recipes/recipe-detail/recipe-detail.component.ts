import {IngredientService} from '../../services/ingredient.service';
import {Recipe} from '../recipe.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  recipe: Recipe;

  constructor(private ingredientService: IngredientService, private route: ActivatedRoute, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.recipe = this.recipeService.getRecipeById(+param.id);
    });
  }

  addIngredients() {
    this.ingredientService.addIngredients(this.recipe.ingredients);
  }
}
