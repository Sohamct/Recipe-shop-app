import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({

    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],

    imports:[
        SharedModule,
        FormsModule,
        RouterModule.forChild(
            [
                {path: '', component: ShoppingListComponent},
            ]
        ),
    ],
    //providers: [LoggingService], this module will use differet instance then provided by app.module

    exports:[

    ]
})

export class ShoppingListModule{

}