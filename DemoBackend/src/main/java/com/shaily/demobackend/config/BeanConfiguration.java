/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.config;

import com.shaily.demobackend.department.dao.IDepartmentDAO;
import com.shaily.demobackend.department.dao.impl.DepartmentDAO;
import com.shaily.demobackend.department.managers.IDepartmentManager;
import com.shaily.demobackend.department.managers.impl.DepartmentManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author shaily
 */
@Configuration
public class BeanConfiguration {

    @Bean
    public IDepartmentManager departmentManager() {
        return new DepartmentManager();
    }
    
    @Bean
    public IDepartmentDAO departmentDao() {
        return new DepartmentDAO();
    }
}
