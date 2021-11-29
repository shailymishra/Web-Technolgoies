import { Component,OnInit } from '@angular/core';
import {Department} from "../models/department.model";
import {DepartmentService} from "../shared-services/department.service";


@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent implements OnInit{
  departmentList : Department[];

  constructor(private departmentService : DepartmentService) { 
   
  }

  ngOnInit(){
    this.departmentList = this.departmentService.getAllDepartments();
  }



}
