package com.enrollment_service.enrollment_service.controller;

import com.enrollment_service.enrollment_service.dto.EnrollmentDTO;
import com.enrollment_service.enrollment_service.services.EnrollmentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/enrollments")
@Slf4j
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping
    public ResponseEntity<EnrollmentDTO> createEnrollment(@RequestBody EnrollmentDTO enrollmentDTO) {
        log.info("Creating enrollment: {}", enrollmentDTO);
        EnrollmentDTO createdEnrollment = enrollmentService.createEnrollment(enrollmentDTO);
        return ResponseEntity.ok(createdEnrollment);
    }

    @GetMapping
    public ResponseEntity<List<EnrollmentDTO>> getAllEnrollments() {
        log.info("Getting all enrollments");
        List<EnrollmentDTO> enrollments = enrollmentService.getAllEnrollments();
        return ResponseEntity.ok(enrollments);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<EnrollmentDTO> getEnrollmentsById(@PathVariable Long Id) {
        log.info("Getting enrollments by user id: {}", Id);
        EnrollmentDTO enrollments = enrollmentService.getEnrollmentById(Id);
        return ResponseEntity.ok(enrollments);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<EnrollmentDTO>> getEnrollmentsByUserId(@PathVariable Long userId) {
        log.info("Getting enrollments by course id: {}", userId);
        List<EnrollmentDTO> enrollments = enrollmentService.getEnrollmentsByCourseId(userId);
        return ResponseEntity.ok(enrollments);
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<EnrollmentDTO>> getEnrollmentsByCourseId(@PathVariable Long courseId) {
        log.info("Getting enrollments by course id: {}", courseId);
        List<EnrollmentDTO> enrollments = enrollmentService.getEnrollmentsByCourseId(courseId);
        return ResponseEntity.ok(enrollments);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnrollmentDTO> updateEnrollment(@PathVariable Long id, @RequestBody EnrollmentDTO enrollmentDTO) {
        log.info("Updating enrollment with id: {}", id);
        EnrollmentDTO updatedEnrollment = enrollmentService.updateEnrollment(id, enrollmentDTO);
        return ResponseEntity.ok(updatedEnrollment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnrollment(@PathVariable Long id) {
        log.info("Deleting enrollment with id: {}", id);
        enrollmentService.deleteEnrollment(id);
        return ResponseEntity.noContent().build();
    }

}
