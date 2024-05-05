import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "recipeList", component: AllRecipeComponent },
  { path: "register/:name", component: RegisterComponent },
  { path: "addRecipe", component: AddRecipeComponent },
  { path: "recipeDetails/:recipe", component: RecipeDetailsComponent },
  { path: "", component: LoginComponent },
  { path: "**", component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
