/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.shaily.restservices.controller;

/**
 *
 * @author shaily
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.shaily.restservices.entity.Student;
import com.shaily.restservices.repository.UserRepository;

import javassist.tools.web.BadHttpRequest;

@RestController
@RequestMapping(path = "/students")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping
    public Iterable<Student> findAll() {
        return repository.findAll();
    }

    @GetMapping(path = "/{student}")
    public Student find(@PathVariable("student") int studendId) {
        return repository.findOne(studendId);
    }

    @PostMapping(consumes = "application/json")
    public Student create(@RequestBody Student student) {
        return repository.save(student);
    }

    @DeleteMapping(path = "/{student}")
    public Student delete(@PathVariable("student") int studendId) {
        Student deleteStudent = repository.findOne(studendId);
        repository.delete(studendId);
        return deleteStudent;
    }

    @PutMapping(path = "/{student}")
    public Student update(@PathVariable("student") int studendId, @RequestBody Student student) throws BadHttpRequest {
        System.out.println("put");
        if (repository.exists(studendId)) {
            student.setId(studendId);
            return repository.save(student);
        } else {
            throw new BadHttpRequest();
        }
    }
}
