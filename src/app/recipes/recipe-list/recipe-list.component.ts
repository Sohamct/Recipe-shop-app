import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe-1024x1536.jpg'),
    new Recipe('Another Test Recipe', 'This is another simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe-1024x1536.jpg'),
  ]
  constructor (){

  }
  ngOnInit(){

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
