import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;
    collapsed = true

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService,
        private router: Router){
        
    }
    ngOnInit(): void {
        this.userSub = this.authService.user
        .subscribe(
            (user : User) => {
                this.isAuthenticated = !user ? false : true;
                // console.log(user)
            }
        )
    }
    onLogout(){
        this.authService.logout();
        this.router.navigate(['/auth']);
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

    onSaveData(){
        this.dataStorageService.storeRecipes()
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

}