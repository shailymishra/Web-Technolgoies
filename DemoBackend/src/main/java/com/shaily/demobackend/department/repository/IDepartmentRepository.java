/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.demobackend.department.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.shaily.demobackend.department.models.Department;
import org.springframework.stereotype.Repository;
/**
 *
 * @author shaily
 */
@Repository
public interface IDepartmentRepository extends JpaRepository<Department, Integer> {
    
}
