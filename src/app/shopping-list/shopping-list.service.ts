import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChnaged = new Subject<Ingredient[]>();
    startedEditting = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Potato', 15)
      ];

      getIngredients(){
        return this.ingredients.slice() // return copy
      }

      getIngredient(id: number){
        return this.ingredients.slice()[id]
      }
    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChnaged.next(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredient[]){
      // for(let ingredient of ingredients){
      //   this.addIngredient(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChnaged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientsChnaged.next(this.ingredients.slice())
    }

    deleteIngredient(id: number){
      this.ingredients.splice(id, 1)
      this.ingredientsChnaged.next(this.ingredients.slice())
    }
}