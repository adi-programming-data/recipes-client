import { Component, OnInit, Input } from '@angular/core';
import Recipe from '../../Models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  public item: Recipe

  constructor() {  }

  ngOnInit(): void {
    console.log(this.item);
  }

}
