import { RecipeService } from './../../shared/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscriber } from 'rxjs';
import LogService from '../../services/log.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe name 1', 'desc 1', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=1600&q=70'),
    new Recipe('Recipe name 2', 'desc 2', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=1600&q=70')
  ];

  recipedAddedSubscriber: Subscriber<Recipe>;
  constructor(private recipeService: RecipeService, private logService: LogService) {
    this.recipedAddedSubscriber = new Subscriber(subscriber => {
      this.onRecipedAdded(subscriber);
    });
    recipeService.recipeAddedSubject.subscribe(this.recipedAddedSubscriber);
  }

  ngOnInit() {
  }
  onRecipedAdded(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  onSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  onNewRecipe() {
    this.logService.log('Log by service');
  }


}
