import { BsDropdownModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { FilterbarComponent } from './filterbar.component';
import { FilterbarService } from './filterbar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        FilterbarComponent,
    ],
    exports: [
        FilterbarComponent,
    ],
    providers: [
        FilterbarService
    ]
})
export class FilterbarModule { }
