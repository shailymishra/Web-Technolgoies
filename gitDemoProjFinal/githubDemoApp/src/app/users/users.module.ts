/*
* This is the user module which manages the user components and services at one place
* @Author : Argusoft
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UserService } from './users.service';
import { SpinnerComponent } from '../directives/spinner/spinner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Constant } from '../common/constant';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
    ],
    providers: [UserService, Constant],
    declarations: [UsersComponent, SpinnerComponent]
})
export class UserModule { }
