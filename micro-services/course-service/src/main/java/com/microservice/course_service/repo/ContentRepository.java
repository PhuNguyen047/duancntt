package com.microservice.course_service.repo;

import com.microservice.course_service.model.Content;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface ContentRepository extends JpaRepository<Content, Long> {
    Set<Content> findByCourseId(Long courseId);
}
