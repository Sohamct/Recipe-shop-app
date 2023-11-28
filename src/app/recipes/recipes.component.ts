import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  //providers: [RecipeService] 
  // if we add new recipe and go to shopping List and again comeback to /recipes then new added recipe will be gone
  // b/c whole recipes folder's all component share the same instance of service defind in the recipes componenent 
  // once we go to shopping-list, recipes compoenet serveice instance is destroyed (to which we have added the new recipe)
  // thats why it happens ... 
  // to solve this we will  provide that instance either in app.module.ts or in app.component.ts
})
export class RecipesComponent implements OnInit, OnDestroy{
  recipes = []

  constructor(){

  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void{

  }

}
