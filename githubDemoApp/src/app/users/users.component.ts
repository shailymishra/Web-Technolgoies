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
    p: number = 1;
    constructor(private _userService: UserService) {
        //   this.followers = [];
    }

    // demo-comment | Searches the user and their followers and displays on the screen
    searchUser() {
        if (this.username !== undefined) {
            this.isRequesting = true;
            this._userService.updateUsername(this.username);
            // this.user = this.getUserDetails();
            this.getUserDetails();
            //  this.followers = this.getFollowersPerPage(1);
            this.getFollowersPerPage(1);
            this.p = 1;
        }
    }

    // demo-comment | Gets the Searched user from GitHub Api
    getUserDetails() {
        this.isSearch = false;
        this._userService.getUser().subscribe(
            (user) => {
                console.log("User is...", user)
                this.user = user;
                this.totalFollowers = user.followers;
                this.isSearch = true;
                //Why is this called here?
                this.getFollowersPerPage(1);
                this.p=1;
            }, (error) => {
                console.error(error);
                this.isRequesting = false;
                this.isSearch = true;
            }
        );
    }

    // demo-comment | Gets the followers of the searched user.
    getFollowersPerPage(pageNumber: number) {

        // this._userService.getFollowers().subscribe(followers => {
        //     this.followers = followers;
        //     this.isRequesting = false;
        //     this.isSearch = true;
        // });
        this._userService.getFollowersPerPage(pageNumber).subscribe(followers => {
            this.followers = followers;
            this.p = pageNumber;
            this.isRequesting = false;
            this.isSearch = true;
        });

    }

    pageChanged($event) {
        console.log("Clicked..." + $event);
        this.isSearch = false;
        this.getFollowersPerPage($event);
    }

}
