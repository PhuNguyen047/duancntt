package com.microservice.course_service.security;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class UserInfor implements UserDetails {
    private Long id;
    private String username;
    private String password;
    private Boolean enabled;
    private List<Authority> authorities;


    public UserInfor(Long id, String username, String password, Boolean enabled, List<Authority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.authorities = authorities;
    }

    @Override
    public Collection<Authority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

}
