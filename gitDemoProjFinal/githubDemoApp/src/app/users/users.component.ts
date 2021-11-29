/*
* This component manages all the core logic
* necessary for the user-search considering the interaction
* with the services and processing the data.
* @Author : Argusoft
*/

import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {

    user: any;
    followers: any;
    username: string;
    isRequesting = false;
    isSearch = false;
    totalFollowers: number;
    currentPage = 1;
    pageNumber = 1;
    constructor(private _userService: UserService) {}

    // demo-comment | Searches the user and their followers and displays on the screen
    searchUser(userName?:string) {
        if(userName != undefined){
            this.username = userName;
        }
        if (this.username !== undefined) {
            this.isRequesting = true;
            this._userService.updateUsername(this.username);
            this.getUserDetails();
        }
    }

    // demo-comment | Gets the Searched user from GitHub Api
    getUserDetails() {
        this.isSearch = false;
        this._userService.getUser().subscribe(
            (user) => {
                this.user = user;
                this.totalFollowers = user.followers;
                this.isSearch = true;
                this.getFollowersPerPage(this.pageNumber);
                this.currentPage = this.pageNumber;;
            }, (error) => {
                console.error(error);
                this.isRequesting = false;
                this.isSearch = true;
            }
        );
    }

    // demo-comment | Gets the followers of the searched user.
    getFollowersPerPage(pageNumber: number) {
        this._userService.getFollowersPerPage(pageNumber).subscribe(followers => {
            this.followers = followers;
            this.currentPage = pageNumber;
            this.isRequesting = false;
            this.isSearch = true;
        });

    }

    pageChanged($event) {
        this.isSearch = false;
        this.isRequesting = true;
        this.getFollowersPerPage($event);
    }
    

}
