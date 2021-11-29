import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap';
import { FilterPipe} from './shared/pipes/FilterPipe';
import { FormsModule }   from '@angular/forms';
import {DepartmentService} from './shared/shared-services/department.service';
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  APP_SIDEBAR_NAV
} from './shared';

import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_COMPONENTS = [
 
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  APP_SIDEBAR_NAV
]

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    FilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import directives





