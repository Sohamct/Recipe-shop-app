import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private igChangeSub : Subscription;
  ingredients: Ingredient[] = [];

  constructor(private slService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChnaged
    .subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe()
  }

  onEditItem(id : number){
    this.slService.startedEditting.next(id);
  }

}
