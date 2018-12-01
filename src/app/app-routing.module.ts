import {RecipesComponent} from './recipes/recipes.component';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: 'recipe', component: RecipesComponent, children: [
      {path: ':id', component: RecipeDetailComponent}
    ]
  },
  {path: 'shopping', component: ShoppingListComponent},
  {path: '', redirectTo: 'recipe', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
