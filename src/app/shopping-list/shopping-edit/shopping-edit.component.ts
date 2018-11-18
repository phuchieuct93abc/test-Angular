import { IngredientService } from './../../services/ingredient.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }
  onAdd() {

    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientService.ingredientAddedSubject.next(newIngredient);
  }
  onDelete() {
    this.ingredientDeleted.emit(this.ingredient);
  }
  onClear() {

  }
}
