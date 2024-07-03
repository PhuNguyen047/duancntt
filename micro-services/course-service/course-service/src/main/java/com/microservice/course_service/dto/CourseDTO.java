package com.microservice.course_service.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class CourseDTO {
    private Long id;
    private String name;
    private String description;
    private String instructor;
}
