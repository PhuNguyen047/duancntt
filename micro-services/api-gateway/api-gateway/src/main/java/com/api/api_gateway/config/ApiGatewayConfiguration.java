package com.api.api_gateway.config;

import com.api.api_gateway.security.AuthenticationFilter;
import com.api.api_gateway.security.JwtConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ApiGatewayConfiguration {
    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public AuthenticationFilter getAuthenticationFilter() {
        return new AuthenticationFilter();
    }

    @Bean
    public JwtConfig jwtConfig() {
        return new JwtConfig();
    }
}
