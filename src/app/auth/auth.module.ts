import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CoreModule } from "../core.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports:[
        CoreModule,
        FormsModule,
        RouterModule.forChild([
            
            {path: '', component: AuthComponent},
            
        ]),
        SharedModule
    ],
    
})

export class AuthModule{

}