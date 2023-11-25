import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Burger Recipe',
         'This is simply a test',
         'https://static.fanpage.it/wp-content/uploads/sites/22/2020/03/iStock-1152247466.jpg',
         [new Ingredient('Masala', 1),
         new Ingredient('French fries', 20)
        ]),

        new Recipe('A sizzler Recipe',
         'This is another simply a test',
          'https://i.pinimg.com/originals/e2/6a/29/e26a29d726f5bc00c283492baa28305e.jpg',
          [new Ingredient('Chatni', 2),
          new Ingredient('Vegetables', 20),
          new Ingredient('Buns', 5)
         ]),
    ]

    recipeSelected = new EventEmitter<Recipe>(); // for cross-component communication

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice(); // return copy array
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }


}