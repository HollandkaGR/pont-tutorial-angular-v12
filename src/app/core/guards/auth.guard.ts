import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuthenticated = this.authService.isAuthenticated(50);

        if (!isAuthenticated) {
            alert('You are not logged in');
            this.router.navigate(['']);
        }

        return isAuthenticated;
    }

    canLoad(route: Route): boolean {
        return this.authService.isAuthenticated(10);
    }
}
