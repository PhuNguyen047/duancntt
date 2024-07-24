package com.microservice.course_service.dto;

import com.microservice.course_service.model.ContenType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ContentDTO {
    private Long id;
    private String title;
    private String description;
    private String contentUrl;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
    private long courseId;
    private ContenType contentType;
}
