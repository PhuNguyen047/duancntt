package com.user_service.user_service.controller;

import com.user_service.user_service.dto.UserDTO;
import com.user_service.user_service.dto.UserResponse;
import com.user_service.user_service.entity.Role;
import com.user_service.user_service.entity.User;
import com.user_service.user_service.jwtutils.TokenManager;
import com.user_service.user_service.service.UserService;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
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

    @GetMapping(value = { "", "/" })
    public @NonNull Iterable<User> getUsers(@RequestParam(required = false) String keyword) {
        return userService.getAllUsers(keyword);
    }

    @GetMapping(value = "/{id}")
    public User getUser(@PathVariable long id) throws UsernameNotFoundException {
        return userService.getUser(id);
    }

    @GetMapping(value = "/{username}")
    public User getUser(@PathVariable String username) throws UsernameNotFoundException {
        return userService.loadUserByUsername(username);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<UserResponse> login(@RequestBody UserDTO userDTO) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userDTO.getUsername(), userDTO.getPassword()));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        } catch (Exception e) {
            throw e;
        }
        final User user = userService.loadUserByUsername(userDTO.getUsername());
        final String token = tokenManager.generateJwtToken(user);
        UserResponse response = new UserResponse(user);
        response.setToken(token);
        String header = "Bearer " + token;
        return new ResponseEntity(response, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<User> updateUser(@RequestBody UserDTO userdto) throws UsernameNotFoundException {
        User user=userService.getUser(userdto.getId());
        userService.update(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDTO userDTO) {
        User user =User.builder()
                .username(userDTO.getUsername())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .email(userDTO.getEmail())
                .build();
        userService.setRoles(user, Arrays.asList("USER"));
        userService.update(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }



}
