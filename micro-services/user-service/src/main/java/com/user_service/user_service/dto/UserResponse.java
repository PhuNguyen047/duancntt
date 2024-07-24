package com.user_service.user_service.dto;


import com.user_service.user_service.entity.Role;
import com.user_service.user_service.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Setter
@Getter
@NoArgsConstructor
public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private List<String> roles;
    private String token;

   public UserResponse(Long id, String username, String email, String token) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.token = token;
    }

    public UserResponse(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toList());
    }
}
