package com.microservice.course_service.services;

import com.microservice.course_service.dto.CourseDTO;
import com.microservice.course_service.model.Course;
import com.microservice.course_service.repo.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;


    public CourseDTO getCourseById(Long id) {
        Optional<Course> course = courseRepository.findById(id);
        return course.map(this::mapCourseToCourseDTO).orElse(null);
    }

    public CourseDTO createCourse(CourseDTO courseDTO) {
        Course course = new Course();
        course.setName(courseDTO.getName());
        course.setDescription(courseDTO.getDescription());
        course.setInstructor(courseDTO.getInstructor());
        Course savedCourse = courseRepository.save(course);
        return mapCourseToCourseDTO(savedCourse);
    }

    public List<CourseDTO> getAllCourses() {
        return courseRepository.findAll().stream().map(this::mapCourseToCourseDTO).collect(Collectors.toList());
    }


    public CourseDTO updateCourse(CourseDTO courseDTO) {
        Optional<Course> course = courseRepository.findById(courseDTO.getId());
        if (course.isPresent()) {
            Course courseToUpdate = course.get();
            courseToUpdate.setName(courseDTO.getName());
            courseToUpdate.setDescription(courseDTO.getDescription());
            courseToUpdate.setInstructor(courseDTO.getInstructor());

            Course updatedCourse = courseRepository.save(courseToUpdate);
            return mapCourseToCourseDTO(updatedCourse);
        }
        return null;
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

    public CourseDTO mapCourseToCourseDTO(Course course) {
        CourseDTO courseDTO = new CourseDTO();
        courseDTO.setId(course.getId());
        courseDTO.setName(course.getName());
        courseDTO.setDescription(course.getDescription());
        courseDTO.setInstructor(course.getInstructor());
        return courseDTO;
    }
}
