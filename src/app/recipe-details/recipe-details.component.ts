import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Recipe from '../../Models/Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

 public recipe: Recipe;

  constructor(public myActive: ActivatedRoute, recipeService: RecipeService) {
    this.myActive.params.subscribe((pa) => { this.recipe = recipeService.recipesArr.find(a => a.Name === pa['recipe']);
    })
    console.log(this.recipe);
  }

  ngOnInit(): void {

  }

}
