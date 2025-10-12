package com.esmee.poppick.config;

import com.esmee.poppick.model.Role;
import com.esmee.poppick.model.User;
import com.esmee.poppick.repository.RoleRepository;
import com.esmee.poppick.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
public class AdminInitializer {

    @Bean
    CommandLineRunner initAdmin(UserRepository userRepository,
                                RoleRepository roleRepository,
                                PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                Role adminRole = roleRepository.findByName("ADMIN")
                        .orElseThrow(() -> new RuntimeException("Role ADMIN not found"));

                User admin = new User();
                admin.setUsername("admin");
                admin.setEmail("admin@poppick.com");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRoles(Set.of(adminRole));

                userRepository.save(admin);
                System.out.println("Admin user created with username 'admin' and password 'admin123'");
            }
        };
    }
}
