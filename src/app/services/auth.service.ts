import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private isLoggedIn = false;
private userRole: 'Admin' | 'User' = 'User';

login(role: 'Admin' | 'User'): void {
this.isLoggedIn = true;
this.userRole = role;
}

logout(): void {
this.isLoggedIn = false;
this.userRole = 'User';
}

isAuthenticated(): boolean {
return this.isLoggedIn;
}

getRole(): 'Admin' | 'User' {
return this.userRole;
}
}