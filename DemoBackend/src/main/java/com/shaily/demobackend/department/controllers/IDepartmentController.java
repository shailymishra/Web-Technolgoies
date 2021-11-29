/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.department.controllers;

import com.shaily.demobackend.department.models.Department;
import java.util.List;

/**
 *
 * @author shaily
 */
public interface IDepartmentController {

    Department createDepartment(Department department);

    Department getDepartmentByID(Integer id);

    List<Department> getAllDepartments();

    Department updateDepartment(Department department);

    void deleteDepartment(Integer id);
}
