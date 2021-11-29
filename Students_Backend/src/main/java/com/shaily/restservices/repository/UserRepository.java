/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.restservices.repository;

/**
 *
 * @author shaily
 */
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import com.shaily.restservices.entity.Student;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

// @RepositoryRestResource(path = "/students")
@RestResource(exported = false)
public interface UserRepository extends JpaRepository<Student, Number> {
    
}
