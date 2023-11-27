import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route : ActivatedRoute, 
    private router : Router){}

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = params['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
  }
  onEditRecipe(){
    //this.router.navigate(['edit'], {relativeTo: this.route}) 
    // both are same
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
  
}
// if we are using our own observable then we have to clean up the unsbscribe it, (cleanup)