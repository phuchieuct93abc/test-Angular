import {RecipeService} from './../../../services/recipe.service';
import {Recipe} from './../../recipe.model';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  newRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.newRecipe = new Recipe('1', null, null, null, []);
  }


}
