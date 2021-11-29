import { Component, OnInit, TemplateRef } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef;
  students: Student[];
  isRequesting: boolean;
  deleteStudentObj: Student;
  alerts: any = [];
  subscription: Subscription;
  constructor(private studentService: StudentService, private router: Router, private modalService: BsModalService) { }


  ngOnInit() {
    console.log('ngOnInti');
    this.studentService.getAllStudents();
    this.subscription = this.studentService._studentSubject.subscribe((object) => {
      if (object) {
        console.log('sub', object.method);
        this.students = object.list;
        this.isRequesting = false;
      }
    });
  }

  addStudent() {
    this.router.navigate(['demo/add']);

  }
  editStudent(id: number) {
    this.router.navigate(['demo/edit/' + id]);
  }


  deleteStudent() {
    this.studentService.deleteStudent(this.deleteStudentObj).subscribe();
  }

  openDeleteModal(template: TemplateRef<any>, deleteStudent: Student) {
    this.modalRef = this.modalService.show(template);
    this.deleteStudentObj = deleteStudent;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
