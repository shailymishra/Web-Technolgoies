/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.department.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import com.shaily.demobackend.department.repository.IDepartmentRepository;
import com.shaily.demobackend.department.dao.IDepartmentDAO;
import com.shaily.demobackend.department.models.Department;
import java.util.List;

/**
 *
 * @author shaily
 */
public class DepartmentDAO implements IDepartmentDAO {

    @Autowired
    private IDepartmentRepository repository;

    @Override
    public Department createDepartment(final Department department) {
        return this.repository.save(department);
    }

    @Override
    public Department getDepartment(final int id) {
        try {
            return this.repository.findOne(id);
        } catch (Exception e) {
            System.out.println("getDepartment" + e);
        }
        return null;
    }

    @Override
    public List<Department> getAllDepartments() {

        try {
            return this.repository.findAll();
        } catch (Exception e) {
            System.out.println("getAllDepartments" + e);
        }
        return null;
    }

    @Override
    public Department updateDepartment(final Department department) {
        try {
            return this.repository.save(department);
        } catch (Exception e) {
            System.out.println("updateDepartment" + e);
        }
        return null;
    }

    @Override
    public void deleteDepartment(final int id) {
        try {
            this.repository.delete(id);
        } catch (Exception e) {
            System.out.println("deleteDepartment"+ e);
        }
    }
}
