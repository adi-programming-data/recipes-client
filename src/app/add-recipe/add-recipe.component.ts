import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Category from '../../Models/Category';
import Layer from '../../Models/Layer';
import Recipe from '../../Models/Recipe';
import { RecipeService } from '../../services/recipe.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  [x: string]: any;

  newRecipe: Recipe = new Recipe(null, null, null, null, null, null, [new Layer(null, [])], [], null, null, null);
  categoriesArr: Category[];
  cat: Category = new Category(null, null, null);

  constructor(public recipeService: RecipeService, public action: Router) { }


  ngOnInit(): void {
    var c = this.recipeService.GetAllCategories().subscribe((success) => {
      this.categoriesArr = success;
      console.log(this.categoriesArr);
      return success;
    },
      (error) => {
        alert("שגיאה בנתונים");
        console.log(error);
      });
    console.log("arr:" + this.categoriesArr);
    console.log("הבטחה" + c);
  }

  addIngredient(Ingred: string) {
    this.newRecipe.Layers[this.newRecipe.Layers.length - 1].Components.push(Ingred);
  }

  addLayer(lay: string) {
    this.newRecipe.Layers.push(new Layer(lay, []));
  }

  addInstruction(inst: string) {
    this.newRecipe.Prepretion.push(inst);
  }

  public async addRecipe() {

    this.newRecipe.Categoryid = this.cat.Id;
    this.newRecipe.IsDisplay = true;
    this.newRecipe.AddDate = new Date(Date.now());

    var c = (await this.recipeService.AddRecipe(this.newRecipe)).subscribe((success) => {
      console.log("suc:" + success);
      this.action.navigate(["recipeList"]);
    },
      (error) => {
        alert("שגיאה בהכנסת המתכון");
        console.log(error);
      });

  }
}
