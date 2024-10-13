import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private readonly authService: AuthService, private readonly router: Router) { }

canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
if (this.authService.isAuthenticated() && this.authService.getRole() === 'Admin') {
return true;
} else {
this.router.navigate(['/']);
return false;
}
}
}