package com.microservice.course_service.controller;

import com.microservice.course_service.model.Course;
import com.microservice.course_service.services.CourseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/courses")
@Slf4j
public class CourseController {

    @Autowired
    CourseService courseService;


    @PostMapping
    public Course createCourse(Course course) {
        log.info("Creating course: {}", course);
        return courseService.createCourse(course);
    }

    @GetMapping("/{id}")
    public Course getCourseById(Long id) {
        log.info("Getting course by id: {}", id);
        return courseService.getCourseById(id);
    }


}
