import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class IngredientService {
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 10),
        new Ingredient('Banana', 20)
    ];
    ingredientAddedSubject = new Subject<Ingredient>();
    ingredientDeletedSubject = new Subject<Ingredient>();

}
