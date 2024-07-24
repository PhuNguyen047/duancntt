package com.enrollment_service.enrollment_service.security;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.Value;

@Getter
@ToString
@NoArgsConstructor
public class JwtConfig {

    @Value("${security.jwt.uri:/auth/**}")
    private String Uri;
    @Value("${security.jwt.header:Authorization}")
    private String header;
    @Value("${security.jwt.prefix:Bearer }")
    private String prefix;
    @Value("${security.jwt.expiration:#{24*60*60}}")
    private int expiration;
    @Value("${security.jwt.secret:JwtSecretKey}")
    private String secret;

}
