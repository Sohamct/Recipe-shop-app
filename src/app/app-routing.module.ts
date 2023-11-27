import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoute : Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent}, // dynamic routes must be after stattic parameter(new) otherwise angular will consider (id=new)
        {path: ':id/edit', component: RecipeEditComponent},

    ]},
    {path: 'shopping-list', component: ShoppingListComponent},

    {path: 'shoppping-list', component: ShoppingListComponent, children: [

        ]   
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoute )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}