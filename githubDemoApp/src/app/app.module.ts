/*
* app.module is the root module of the angular app
* which manages other modules globally
* @Author : Argusoft
*/

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './users/users.module';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
