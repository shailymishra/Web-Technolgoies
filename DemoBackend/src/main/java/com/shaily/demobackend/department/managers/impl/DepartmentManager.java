/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.department.managers.impl;

import com.shaily.demobackend.department.dao.IDepartmentDAO;
import com.shaily.demobackend.department.managers.IDepartmentManager;
import com.shaily.demobackend.department.models.Department;
import java.util.Date;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author shaily
 */
@Transactional(value = Transactional.TxType.REQUIRED)
public class DepartmentManager implements IDepartmentManager {

    @Autowired
    private IDepartmentDAO departmentDAO;

    @Override
    public Department createDepartment(Department department) {
        department.setOwner("Admin");
        department.setLastUpdatedDate(new java.sql.Timestamp(new Date().getTime()));
        return this.departmentDAO.createDepartment(department);
    }

    @Override
    public Department getDepartment(final int id) {
        final Department department = this.departmentDAO.getDepartment(id);
        return department;
    }

    @Override
    public List<Department> getAllDepartments() {
        final List<Department> departments = this.departmentDAO.getAllDepartments();
        return departments;
    }

    @Override
    public Department updateDepartment(Department department) {
        department.setOwner("Test User");
        return this.departmentDAO.updateDepartment(department);
    }

    @Override
    public void deleteDepartment(final int id) {
        this.departmentDAO.deleteDepartment(id);
    }
}
