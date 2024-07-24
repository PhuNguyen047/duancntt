package com.user_service.user_service.controller;

import com.user_service.user_service.dto.UserDTO;
import com.user_service.user_service.entity.Role;
import com.user_service.user_service.jwtutils.TokenManager;
import com.user_service.user_service.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@Slf4j
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService ;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenManager tokenManager;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
        log.info("Registering user: {}", userDTO);
        if (userService.existsByUsername(userDTO.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userService.existsByEmail(userDTO.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        Set<Role> roles=new HashSet<>();
        roles.add(new Role(1L,"ROLE_USER"));
        UserDTO createdUser = userService.createUser(userDTO,roles);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        log.info("Getting user by id: {}", id);
        UserDTO user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<UserDTO> getUserByUsername(@PathVariable String username) {
        log.info("Getting user by username: {}", username);
        UserDTO user = userService.getUserByUsername(username);
        return ResponseEntity.ok(user);
    }
}
