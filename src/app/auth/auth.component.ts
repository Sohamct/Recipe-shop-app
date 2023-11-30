import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{

    isLogginMode: boolean = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService,
        private router: Router){}

    onSwitchMode(){
        this.isLogginMode = !this.isLogginMode;
    }
    onSubmit(form: NgForm){
        const email = form.value.email
        const password = form.value.password;

        let authObs : Observable<AuthResponseData>

        this.isLoading = true;
        if(this.isLogginMode){
            authObs = this.authService.login(email, password)
            
        }else{
            if(!form.valid){
                return ;
            }
            
            authObs = this.authService.signup(email, password);
        }
        
        authObs.subscribe(
            resData => {
                console.log(resData)
                this.isLoading = false;
                this.router.navigate(['/recipes'])
            }, errorRes => {
                this.error = errorRes;
                this.isLoading = false;

            }
        )
        form.reset();
    }
}