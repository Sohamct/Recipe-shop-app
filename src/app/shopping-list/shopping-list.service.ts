import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChnaged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Potato', 15)
      ];

      getIngredients(){
        return this.ingredients.slice() // return copy
      }
    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChnaged.emit(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredient[]){
      // for(let ingredient of ingredients){
      //   this.addIngredient(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChnaged.emit(this.ingredients.slice())
    }
}