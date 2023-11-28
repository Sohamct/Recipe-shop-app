import { Component,  ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  @ViewChild('f', {static: true}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;
  constructor(private slService: ShoppingListService){

  }

  ngOnInit(){
    this.subscription = this.slService.startedEditting
    .subscribe(
      (id: number)=>{
        this.editMode = true;
        this.editedItemIndex = id;
        this.editedItem = this.slService.getIngredient(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onSubmitItem(form: NgForm){
  const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else{
      this.slService.addIngredient(newIngredient)
    }
    this.editMode=false;
    form.reset()
  }
  onClearForm(){
    this.editMode = false;
    this.slForm.reset() 
  }
  onDeleteItem(){
    this.onClearForm()
    this.slService.deleteIngredient(this.editedItemIndex);
  }
}
