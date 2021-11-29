import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

const EMAIL_VALIDATION_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
const PHONE_NUMBER_VALIDATION_REX = "^[789][0-9]{9}$";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})


export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  private sub: any;

  constructor(private studentService: StudentService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        // Edit scenario
        this.studentService.getStudentById(+params['id']).subscribe((editStudent) => {
          console.log('here', editStudent);
          if (editStudent) {
            this.studentForm = this.formBuilder.group({
              id: editStudent.id,
              firstname: [editStudent.firstname, [Validators.required]],
              lastname: [editStudent.lastname, [Validators.required]],
              email: [editStudent.email, [Validators.required, Validators.pattern(EMAIL_VALIDATION_REGEX)]],
              phone: [editStudent.phone, [Validators.required, Validators.pattern(PHONE_NUMBER_VALIDATION_REX)]],
              address: [editStudent.address, [Validators.required]],
              gender: [editStudent.gender, [Validators.required]]
            });
          }
        });
      } else {
        // add scenario
        this.reset();
      }
    });
  }

  onSubmit() {
    const student = this.studentForm.value;
    this.studentService.saveStudent(student).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  back() {
    this.reset();
    this.router.navigate(['']);
  }

  reset() {

    let id: number;
    // If while editing student - clicked on reset
    if (this.studentForm && this.studentForm.value.id != null) {
      id = this.studentForm.value.id;
    } else {
      id = null;
    }

    this.studentForm = this.formBuilder.group({
      id: id,
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(EMAIL_VALIDATION_REGEX)]],
      phone: [null, [Validators.required, Validators.pattern(PHONE_NUMBER_VALIDATION_REX)]],
      address: [null, [Validators.required]],
      gender: [null, [Validators.required]]
    });
  }
}
