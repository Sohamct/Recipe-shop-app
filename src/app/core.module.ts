import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { RecipesResolverService } from "./recipes/recipe-resolver.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth/auth.interceptor.service";
import { AuthGuard } from "./auth/auth.guard";
import { LoggingService } from "./logging.service";

// this is eagerly loaded module since we are importing coremodule in app.module.ts

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        RecipesResolverService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
         AuthGuard,
         //LoggingService // o/p in console will same as if we provide logginservice in appmodule
    ]
})
//we don't need to export services, only declaration should be declared and exported
// services are automaticaly injected in root module
export class CoreModule{

}