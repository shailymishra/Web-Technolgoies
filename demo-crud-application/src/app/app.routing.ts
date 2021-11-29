import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';

// Eager loading the modules
const routes: Routes = [
    { path: '', component: StudentListComponent },
    { path: 'demo/students', component: StudentListComponent },
    { path: 'demo/add', component: StudentFormComponent },
    { path: 'demo/edit/:id', component: StudentFormComponent }
];
export const appRoutingProviders: any[] = [

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }