import {IngredientService} from './../../services/ingredient.service';
import {Ingredient} from './../../shared/ingredient.model';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges {
  @Input() ingredient: Ingredient;
  @Output() ingredientCleared = new EventEmitter<Ingredient>();


  @ViewChild('form')
  form: NgForm;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {

  }

  onDelete() {
    this.ingredientService.removeIngredient(this.ingredient);
    this.ingredient = null;
    this.form.resetForm();
  }


  onSubmit() {
    const ingredientName = this.form.value.name;
    const ingredientAmount = this.form.value.amount;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientService.addIngredient(newIngredient);
    this.form.reset();
  }

  onClear() {
    this.form.reset();
    this.ingredientCleared.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (changes['ingredient'].currentValue) {

        this.form.setValue({
          name: changes['ingredient'].currentValue.name,
          amount: changes['ingredient'].currentValue.amount
        });
      }

    });

  }
}
