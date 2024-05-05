import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ROUTES } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RecipeService } from '../services/recipe.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LevelStarsPipe } from './pipes/level-stars.pipe';
import { TimePipe } from './pipes/time.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AllRecipeComponent,
    SmallRecipeComponent,
    LoginComponent,
    LevelStarsPipe,
    RegisterComponent,
    TimePipe,
    AddRecipeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
