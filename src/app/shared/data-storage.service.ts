import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "../recipes/recipes.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'}) // by providIn, this servicce will be used by application-wide and don't need to specify in app.module.ts
export class DataStorageService  { 

    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService){
    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();

        this.http.put('https://ng-course-recipe-book-c7be0-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes)  // to show the loading status we can subscribe in our individual componenet     // will replaced alredy existed(override)
        .subscribe(response => {
            console.log(response);
        })
    }
    // on;y want to take 1 valur from thar observable, then it should automatically unsubscribe
       
    fetchRecipes(){
            return this.http.get<Recipe[]>(
                'https://ng-course-recipe-book-c7be0-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json?auth',
                )
         // exhaust map wait for first user observable to complete which will happen after we took latest observable, and replace prevouse user (at beneath request)
        
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] 
                }
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        )
    }
}