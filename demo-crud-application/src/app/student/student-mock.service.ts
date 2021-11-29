import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Student } from './student.model';
import { ToasterService } from '../shared/toaster.service';
import { students } from '../mockdata/student-mock';
@Injectable()
export class StudentService {

  constructor(private toasterService: ToasterService) {
    this.students = students;
  }

  students: Array<Student>;

  getAllStudents(): Student[] {
    return this.students
  }

  saveStudent(student: Student) {
    if (student.id != null) {
      //Save Already Existing student
      const updateStudentIndex = this.students.findIndex(updateStudent => updateStudent.id === student.id);
      this.students[updateStudentIndex] = student;
      this.toasterService.sendToaster('success', student.firstname + '  has been updated ', 3000);
    } else {
      // Add a new student
      
      if (this.students.length !== 0) {
        const lastSavedStudentId = (this.students.slice(-1)[0]).id;
        student.id = lastSavedStudentId + 1;
      }
      else { //If there are not entry 
        student.id = 1;
      }
      this.students.push(student);
      this.toasterService.sendToaster('success', student.firstname + '  has been added ', 3000);
    }

    return this.students;
  }

  getStudentById(id: number) {
    const editStudent = this.students.find(editStudent => editStudent.id === id);
    return editStudent;
  }

  deleteStudent(student: Student) {
    const deleteStudentIndex = this.students.findIndex(deleteStudent => deleteStudent.id === student.id);
    if (deleteStudentIndex !== -1) {
      this.students.splice(deleteStudentIndex, 1);
      this.toasterService.sendToaster('success', student.firstname + '  has been deleted ', 3000);
    }
    return this.students;
  }

}
