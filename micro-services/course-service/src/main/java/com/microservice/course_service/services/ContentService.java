package com.microservice.course_service.services;

import com.microservice.course_service.dto.ContentDTO;
import com.microservice.course_service.model.Content;
import com.microservice.course_service.model.Course;
import com.microservice.course_service.repo.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ContentService {

    @Autowired
    private ContentRepository contentRepository;

    @Autowired
    private CourseService courseService;

    public ContentDTO createContent(ContentDTO contentDTO) {
        Content content = new Content();
        content.setTitle(contentDTO.getTitle());
        content.setDescription(contentDTO.getDescription());
        content.setCreatedDate(contentDTO.getCreatedDate());
        content.setLastModifiedDate(contentDTO.getLastModifiedDate());
        content.setContentUrl(contentDTO.getContentUrl());
        content.setContentType(contentDTO.getContentType());

        Course course = courseService.getCourseById(contentDTO.getCourseId());
        content.setCourse(course);
        Content savedContent = contentRepository.save(content);

        return mapContentToContentDTO(savedContent);
    }

    public ContentDTO getContentById(Long contentId) {
        Content content = contentRepository.findById(contentId).get();
        return content != null ? mapContentToContentDTO(content) : null;
    }

    public Set<ContentDTO> getContentsByCourseId(Long courseId) {
        Set<Content> contents = contentRepository.findByCourseId(courseId);
        return mapContentSetToContentDTOSet(contents);
    }

    public ContentDTO updateContent(ContentDTO contentDTO) {
        Content content = contentRepository.findById(contentDTO.getId()).get();
        if (content != null) {
            content.setTitle(contentDTO.getTitle());
            content.setDescription(contentDTO.getDescription());
            content.setCreatedDate(contentDTO.getCreatedDate());
            content.setLastModifiedDate(contentDTO.getLastModifiedDate());
            content.setContentUrl(contentDTO.getContentUrl());
            content.setContentType(contentDTO.getContentType());

            Course course = courseService.getCourseById(contentDTO.getCourseId());
            content.setCourse(course);
            Content savedContent = contentRepository.save(content);
            return mapContentToContentDTO(savedContent);
        }
        return null;
    }



}
