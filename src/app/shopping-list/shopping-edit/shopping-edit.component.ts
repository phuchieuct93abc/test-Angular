import {IngredientService} from '../../services/ingredient.service';
import {Ingredient} from '../../shared/ingredient.model';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('form')
  form: NgForm;
  isEditMode = false;
  ingredient: Ingredient;
  ingredientId: number;

  constructor(private ingredientService: IngredientService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ingredient = this.ingredientService.getIngredientById(+params.id);
      if (this.ingredient) {
        this.isEditMode = true;
        setTimeout(() => {
          this.ingredientId = +params.id;
          this.form.setValue({
            name: this.ingredient.name,
            amount: this.ingredient.amount,
            // id: +params.id
          });
        });
      }

    });
  }


  onDelete() {
    this.ingredientService.removeIngredient(this.ingredient);
    this.form.resetForm();
    this.isEditMode = false;
    this.navigateToShopping();

  }


  private navigateToShopping() {
    this.router.navigate(['shopping']);
  }

  onSubmit() {
    const value = this.form.value;
    const newIngredient = new Ingredient(this.ingredientId, value.name, value.amount);
    this.ingredientService.updateIngredient(newIngredient);
    this.form.reset();
    this.isEditMode = false;
    this.navigateToShopping();

  }

  onClear() {
    this.form.reset();
    this.isEditMode = false;
    this.navigateToShopping();
  }
}
