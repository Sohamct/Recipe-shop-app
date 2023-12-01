import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";


const appRoute : Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', loadChildren: ()=> import('./recipes/recipes.module').then(m => m.RecipesModule)}, // please only load module where i am pointing to using loadChildren(lazy loading) // restart server
    {path: 'shopping-list', loadChildren: ()=> import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}, // lazy loading ShoppingList
    {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)}
]
//since loadChild inclueds RecipesModule it should be not import into app.module.ts
@NgModule({
    imports: [
        RouterModule.forRoot(appRoute , {preloadingStrategy: PreloadAllModules}) // can use forRoot only once in app
    ], // preloading means, when required module is loaded to by browser, then after all lazyloading module will be laoded before parcular request for a module a arrived.(preloading lazyloading module in ideal time)(for optimizing lazy loading)

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}