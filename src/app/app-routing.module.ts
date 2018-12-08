import {RecipesComponent} from './recipes/recipes.component';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';

const routes: Routes = [
  {
    path: 'recipe', component: RecipesComponent, children: [
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {
    path: 'shopping', component: ShoppingListComponent, children: [
      {path: '', component: ShoppingEditComponent},
      {path: ':id', component: ShoppingEditComponent}
    ]
  },
  {path: '', redirectTo: 'recipe', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
