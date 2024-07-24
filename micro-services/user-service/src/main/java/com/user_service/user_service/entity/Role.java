package com.user_service.user_service.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Collection;
import java.util.List;


@Entity
@Setter
@Getter
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToMany(mappedBy = "roles")
    private Collection<User> users;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "roles_authorities",
            joinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "authority_id", referencedColumnName = "id"))
    private List<Authority> authorities;

    @Builder
    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }
    public void addAuthority(Authority authority) {
        this.authorities.add(authority);
    }
    public Collection<Authority> getAuthorities() {
        return this.authorities;
    }
}
