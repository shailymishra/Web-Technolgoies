import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Student } from './student.model';
import { ToasterService } from '../shared/toaster.service';
import { students } from '../mockdata/student-mock';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class StudentService {

  studentList: Student[];
  _studentSubject = new BehaviorSubject(null);

  baseUrl = 'http://localhost:8080/students';
  constructor(private http: HttpClient, private toasterService: ToasterService) {
    this.students = students;
  }

  students: Array<Student>;

  getAllStudents() {
    this.http.get(this.baseUrl).subscribe((student: Student[]) => {
      this.studentList = student;
      console.log('get calls next...', student);
      this._studentSubject.next({ list: this.studentList, method: 'get' });
    });
  }

  saveStudent(student: Student) {
    if (student.id == null) {
      return this.add(student);
    } else {
      return this.update(student);
    }
  }

  add(student: Student) {
    return this.http.post(this.baseUrl, student).map((addedStudent: Student) => {
      this.toasterService.sendToaster('success', student.firstname + '  has been added ', 3000);
    });
  }

  update(student: Student) {
    console.log('update');
    return this.http.put(`${this.baseUrl}/${student.id}`, student).map((updateStudent: Student) => {
      this.toasterService.sendToaster('success', student.firstname + '  has been updated ', 3000);
    });
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteStudent(student: Student) {
    const deleteStudentIndex = this.findByIndex(student.id);
    return this.http.delete(`${this.baseUrl}/${student.id}`).map((addedStudent: Student) => {
      this.studentList.splice(deleteStudentIndex, 1);
      this._studentSubject.next({ list: this.studentList, method: 'delete' });
      this.toasterService.sendToaster('success', student.firstname + '  has been deleted ', 3000);
    });
  }

  findByIndex(id) {
    return this.studentList.findIndex(student => student.id === id);
  }

}
