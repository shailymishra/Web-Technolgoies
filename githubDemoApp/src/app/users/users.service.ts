/*
* This service interacts with the user API of GitHub and returns the user data
* @Author : Argusoft
*/

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constant } from '../common/constant';

@Injectable()
export class UserService {

    private username = '';
    private userApiUrl = 'https://api.github.com/users/';

    constructor(
        private _http: Http,
        private _constant: Constant
    ) { }

    getUser() {
        return this._http.get(this.userApiUrl + this.username)
            .map(res => res.json());
    }

    getFollowers() {
        return this._http.get(this.userApiUrl + this.username + '/followers')
            .map(res => res.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }

    getFollowersPerPage(pageNumber: number) {
        return this._http.get(this.userApiUrl + this.username + '/followers?per_page=' + this._constant.perPage + "&page=" + pageNumber)
            .map(res => res.json());
    }
}
