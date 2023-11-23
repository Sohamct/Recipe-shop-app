import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe-1024x1536.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe-1024x1536.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dosa-recipe-1024x1536.jpg'),
  ]
  constructor (){

  }
  ngOnInit(){

  }
}
