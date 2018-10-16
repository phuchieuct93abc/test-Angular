import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root',

})
export class RecipeService {

    recipeAddedObvervable: Observable<Recipe>;
    recipeObserver: Observer<Recipe>;
    constructor() {
        this.recipeAddedObvervable = new Observable(observer => {
            this.recipeObserver = observer;
        });
    }
    registerRecipeCreated() {
        return this.recipeObserver;
    }
    subscribeRecipeAdded(subscriber) {
        this.recipeAddedObvervable.subscribe(subscriber);
    }
}
