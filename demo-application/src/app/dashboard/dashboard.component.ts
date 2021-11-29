import { Component, OnInit } from '@angular/core';
import { Department } from '../shared/models/department.model';
import {DepartmentService} from "../shared/shared-services/department.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchText: string;

  constructor(private departmentService:DepartmentService) {

  }

  departmentList: Department[];

  ngOnInit() {
    this.departmentList = this.departmentService.getAllDepartments();
  }

}
