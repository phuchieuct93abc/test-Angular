import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'recipe', component: RecipesComponent },
  { path: '', redirectTo: 'recipe', pathMatch: 'full' }, 
  { path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
