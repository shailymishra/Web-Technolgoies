/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.department.controllers.impl;

import com.shaily.demobackend.department.controllers.IDepartmentController;
import com.shaily.demobackend.department.managers.IDepartmentManager;
import com.shaily.demobackend.department.models.Department;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author shaily
 */
@RestController
@RequestMapping("/department")
public class DepartmentControllerImpl implements IDepartmentController {

    @Autowired
    private IDepartmentManager departmentManager;

    @Override
    @RequestMapping( method = RequestMethod.POST)
    @ResponseBody
    public Department createDepartment(
            @Valid @RequestBody final Department department) {
        return this.departmentManager.createDepartment(department);
    }

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Department getDepartmentByID(
            @Valid @PathVariable final Integer id) {
        return this.departmentManager.getDepartment(id);
    }

    @Override
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Department> getAllDepartments() {
        return this.departmentManager.getAllDepartments();
    }

    @Override
    @RequestMapping( method = RequestMethod.PUT)
    @ResponseBody
    public Department updateDepartment(
            @Valid @RequestBody final Department department) {
        return this.departmentManager.updateDepartment(department);
    }

    @Override
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteDepartment(
            @PathVariable final Integer id) {
        this.departmentManager.deleteDepartment(id);
    }

}
