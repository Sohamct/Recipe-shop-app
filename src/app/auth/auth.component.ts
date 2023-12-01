import { Component, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{

    isLogginMode: boolean = true;
    isLoading = false;
    error: string = null;

    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective; // first occureence of appPlaceholder
    private closeSub: Subscription;

    constructor(private authService: AuthService,
        private router: Router,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver){}

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
                // console.log(this.error)
                this.showErrorAlert(errorRes);
                this.isLoading = false;

            }
        )
        form.reset();
    }

    onHandleError(){
        this.error = null;
    }

    private showErrorAlert(message: string) {
        if (!this.alertHost || !this.alertHost.viewContainerRef) {
            return;
        }

        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;

        hostViewContainerRef.clear();

        const alertComponentRef = hostViewContainerRef.createComponent(alertComponentFactory);
        alertComponentRef.instance.message = message;

        this.closeSub = alertComponentRef.instance.close.subscribe(()=>{
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        })
    }

    ngOnDestroy(): void {
        if(this.closeSub){
            this.closeSub.unsubscribe();
        }
    }
}