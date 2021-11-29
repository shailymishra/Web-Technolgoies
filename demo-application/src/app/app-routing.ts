
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
// Eager loading the modules
const routes: Routes = [
   { path: '', component: DashboardComponent },
    { path: 'demo/dashboard', component: DashboardComponent },
];
export const appRoutingProviders: any[] = [

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }