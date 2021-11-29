import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import * as constant from '../shared/config';
@Injectable()
export class AuthService {

    constructor(private router: Router) {

    }

    login(userName, password) {
        localStorage.setItem('access_token', 'apiresult');
        this.router.navigate([constant.DASHBOARD_URL]);
        const apiResult = Observable.of(new Object()).map(() => null);
        return apiResult;
    }

    logout() {
        localStorage.removeItem('access_token');
        this.router.navigate([constant.LOGIN_URL]);

    }

    isLoggedIn() {
        return localStorage.getItem('access_token') === 'apiresult';
    }

}
