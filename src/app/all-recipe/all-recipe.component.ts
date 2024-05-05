import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Recipe from '../../Models/Recipe';
import { RecipeService } from '../../services/recipe.service';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {

  // public arr: Recipe[];

  constructor(public recipeService: RecipeService, public action: Router) { }

  ngOnInit(): void {
    var c = this.recipeService.GetAllRecipes().subscribe((success:any) => {
      this.recipeService.recipesArr = success;
      console.log(this.recipeService.recipesArr);
      return success;
    },
      (error) => {
        alert("שגיאה בנתונים");
        console.log(error);
      });
    console.log("arr:" + this.recipeService.recipesArr);
    console.log("הבטחה" + c);
  }

  viewRecipe(r: Recipe) {
    console.log(r);
    
    this.action.navigate(['recipeDetails', r.Name]);
  }

}
