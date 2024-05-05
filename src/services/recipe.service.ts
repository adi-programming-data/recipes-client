import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import Recipe from '../Models/Recipe';
import Category from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  // baseRouteUrl: string

  constructor(public http: HttpClient) { }

  baseRouteUrlR = `${environment.baseUrl}/Recipe`;
  baseRouteUrlC = `${environment.baseUrl}/Category`;

  recipesArr: Recipe[];

  GetAllRecipes() {
    ~(`${this.baseRouteUrlR}/GetAllRecipes`);
    return this.http.get<Recipe[]>(`${this.baseRouteUrlR}/GetAllRecipes`);
  }
  GetAllCategories() {
    ~(`${this.baseRouteUrlC}/GetAllCategories`);
    return this.http.get<Category[]>(`${this.baseRouteUrlC}/GetAllCategories`);
  }
  AddRecipe(recipe: Recipe) {
    ~(`${this.baseRouteUrlR}/AddRecipe`);
    return this.http.post<Recipe>(`${this.baseRouteUrlR}/AddRecipe/?u=${recipe}`, recipe);
  }

}
