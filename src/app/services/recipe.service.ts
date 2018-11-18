import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Recipe name 1', 'desc 1', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=1600&q=70'),
        new Recipe('Recipe name 2', 'desc 2', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=1600&q=70')
    ];

    recipeSelected = new Subject<Recipe>();
    getRecipe() {
        return this.recipes.slice();
    }
}
