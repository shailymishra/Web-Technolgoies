/*
* App-routing.module is the main routing file
* from where it starts the angular-2 rotuing for the other pages
* @Author : Argusoft
*/

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';

// demo-comment | This is the route constants to define the url routing
const routes: Routes = [
    {path: '', component: UsersComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

