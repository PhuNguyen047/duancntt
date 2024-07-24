package com.enrollment_service.enrollment_service.services;

import com.enrollment_service.enrollment_service.dto.EnrollmentDTO;
import com.enrollment_service.enrollment_service.model.Enrollment;
import com.enrollment_service.enrollment_service.repo.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    public EnrollmentDTO createEnrollment(EnrollmentDTO enrollmentDTO) {
        Enrollment enrollment = new Enrollment();
        enrollment.setUserId(enrollmentDTO.getUserId());
        enrollment.setCourseId(enrollmentDTO.getCourseId());
        Enrollment savedEnrollment = enrollmentRepository.save(enrollment);
        return mapEnrollmentToEnrollmentDTO(savedEnrollment);
    }

    public List<EnrollmentDTO> getEnrollmentsByUserId(Long userId) {
        return enrollmentRepository.findByUserId(userId).stream().map(this::mapEnrollmentToEnrollmentDTO).collect(Collectors.toList());
    }

    public List<EnrollmentDTO> getAllEnrollments() {
        return enrollmentRepository.findAll().stream().map(this::mapEnrollmentToEnrollmentDTO).collect(Collectors.toList());
    }

    public List<EnrollmentDTO> getEnrollmentsByCourseId(Long courseId) {
        return enrollmentRepository.findByCourseId(courseId).stream().map(this::mapEnrollmentToEnrollmentDTO).collect(Collectors.toList());
    }

    public EnrollmentDTO getEnrollmentById(Long id) {
        Optional<Enrollment> enrollmentOptional = enrollmentRepository.findById(id);
        return enrollmentOptional.map(this::mapEnrollmentToEnrollmentDTO).orElse(null);
    }

    public EnrollmentDTO updateEnrollment(Long id,EnrollmentDTO enrollmentDTO) {
        Optional<Enrollment> enrollmentOptional = enrollmentRepository.findById(id);

        if(enrollmentOptional.isPresent()) {
            Enrollment enrollment = enrollmentOptional.get();
            enrollment.setUserId(enrollmentDTO.getUserId());
            enrollment.setCourseId(enrollmentDTO.getCourseId());
            Enrollment savedEnrollment = enrollmentRepository.save(enrollment);
            return mapEnrollmentToEnrollmentDTO(savedEnrollment);
        }
        return null;
    }
    public void deleteEnrollment(Long id) {
        enrollmentRepository.deleteById(id);
    }
    public EnrollmentDTO mapEnrollmentToEnrollmentDTO(Enrollment enrollment) {
        EnrollmentDTO enrollmentDTO = new EnrollmentDTO();
        enrollmentDTO.setId(enrollment.getId());
        enrollmentDTO.setUserId(enrollment.getUserId());
        enrollmentDTO.setCourseId(enrollment.getCourseId());
        return enrollmentDTO;
    }

}
