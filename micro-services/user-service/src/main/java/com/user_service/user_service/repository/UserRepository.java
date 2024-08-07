package com.user_service.user_service.repository;

import com.user_service.user_service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

    Iterable<User> search(String keyword);
}
