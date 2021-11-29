import { NgModule } from '@angular/core';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
    imports: [
        SlideMenuModule
    ],
    declarations: [
        SlidebarComponent,
    ],
    exports: [
        SlidebarComponent,
    ],
})
export class BaseModule { }
