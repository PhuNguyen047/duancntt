package com.microservice.course_service.controller;

import com.microservice.course_service.dto.ContentDTO;
import com.microservice.course_service.services.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/content")
public class ContentController {


    @Autowired
    private ContentService contentService;


    @PostMapping
    public ResponseEntity<ContentDTO> createContent(@RequestBody ContentDTO contentDTO) {
        ContentDTO content = contentService.createContent(contentDTO);
        return ResponseEntity.status(201).body(content);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ContentDTO> getContentById(@PathVariable Long id) {
        ContentDTO content = contentService.getContentById(id);
        return content != null ? ResponseEntity.ok(content) : ResponseEntity.notFound().build();
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<ContentDTO> getContentsByCourseId(@PathVariable Long courseId) {
        ContentDTO content = contentService.getContentsByCourseId(courseId);
        return content != null ? ResponseEntity.ok(content) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContentDTO> updateContent(@RequestBody ContentDTO contentDTO) {
        ContentDTO content = contentService.updateContent(contentDTO);
        return content != null ? ResponseEntity.ok(content) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContent(@PathVariable Long id) {
        contentService.deleteContent(id);
        return ResponseEntity.noContent().build();
    }
}
