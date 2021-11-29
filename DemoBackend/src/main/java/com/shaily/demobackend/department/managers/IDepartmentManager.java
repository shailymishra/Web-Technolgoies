/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.department.managers;

import com.shaily.demobackend.department.models.Department;
import java.util.List;

/**
 *
 * @author shaily
 */
public interface IDepartmentManager {
    public Department createDepartment(Department department);
    public Department getDepartment(int id);
    public List<Department> getAllDepartments();
    public Department updateDepartment(Department department);
    public void deleteDepartment(int id);
}
