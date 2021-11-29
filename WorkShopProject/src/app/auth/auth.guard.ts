import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as constant from '../shared/config';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authSerice: AuthService
    ) { }

    canActivate() {
        if (this.authSerice.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate([constant.LOGIN_URL]);
            //    this.router.navigate(['/login']);
            return false;
        }
    }
}
