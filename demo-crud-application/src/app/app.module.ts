import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AppRoutingModule } from './app.routing';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './student/student.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToasterService } from './shared/toaster.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './shared/httpinterceptor';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StudentService, ToasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
