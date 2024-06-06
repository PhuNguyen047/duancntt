package com.api.api_gateway.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class AuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtConfig jwtConfig;

    @Autowired
    RestTemplate restTemplate;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            UserInfor userInfor = isAuthTokenValid(request.getHeader(jwtConfig.getHeader()));
            if (userInfor != null) {
                UsernamePasswordAuthenticationToken auth= new UsernamePasswordAuthenticationToken(userInfor.getUsername(), null,userInfor.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        catch (Exception e) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");

        }
    }

    private UserInfor isAuthTokenValid(String token) {
        ResponseEntity<UserInfor> restExchange=null;
        try {
            restExchange=restTemplate.exchange("http://localhost:8081/auth/{token}", HttpMethod.GET, null, UserInfor.class,token);
        } catch (HttpClientErrorException e) {
           if (e.getStatusCode().value() == HttpStatus.UNAUTHORIZED.value()) {
               return null;
           }
           throw e;
        }
        return restExchange.getBody();
    }
}
