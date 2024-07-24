package com.user_service.user_service.service;

import com.user_service.user_service.entity.Authority;
import com.user_service.user_service.entity.Role;
import com.user_service.user_service.entity.User;
import com.user_service.user_service.repository.AuthorityRepository;
import com.user_service.user_service.repository.RoleRepository;
import com.user_service.user_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public Iterable<User> getAllUsers(String keyword) {
        if (keyword != null) {
            return userRepository.search(keyword);
        }
        return userRepository.findAll();
    }

    @Override
    public User getUser(long id) throws UsernameNotFoundException {
        return userRepository
                .findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("user"));
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }

    @Override
    public Role update(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void setRoles(User user, List<String> roles) {
        List<Role> rolesList = new ArrayList<>();
        for (String roleName : roles) {
            rolesList.add(roleRepository.findByName(roleName));
        }
        user.setRoles(rolesList);
    }

    @Override
    public Authority createAuthorityIfNotFound(String name) {
        Authority authority = authorityRepository.findByName(name);
        if (authority == null) {
            authority = new Authority();
            authority.setName(name);
            authorityRepository.save(authority);
        }

        return authority;
    }

    @Override
    public void setAuthorities(Role role, List<Authority> authorities) {
        role.setAuthorities(authorities);
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) throw new UsernameNotFoundException(username);
        return user;
    }
}
