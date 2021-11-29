import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BaseModule } from './base/base.module';
import { SharedModule } from './shared/shared.module';
import { FilterbarModule } from './filterbar/filterbar.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    FilterbarModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BaseModule,
    SharedModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
