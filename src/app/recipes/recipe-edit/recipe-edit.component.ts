import {Component, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  editMode: boolean;
  @ViewChild('form')
  form: NgForm;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.editMode = id != null;
      if (this.editMode) {

        this.recipe = this.recipeService.getRecipeById(+params['id']);
      } else {
        this.recipe = new Recipe(null, null, null, null, []);
      }
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.errors);
      return false;
    }

    this.recipeService.updateRecipe(this.recipe);
    if (this.editMode) {

      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', this.recipe.id], {relativeTo: this.route});

    }
  }


}
