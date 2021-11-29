import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Department } from '../models/department.model';
import { departments } from '../../../mockdata/department-mockdata';
@Injectable()
export class DepartmentService {

    constructor() {
        this.departmentList = departments;
    }

    departmentList: Array<Department>;

    getAllDepartments(): Department[] {
        return this.departmentList
    }
}
