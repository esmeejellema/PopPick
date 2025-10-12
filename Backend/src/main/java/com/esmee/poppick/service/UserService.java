// UserService.java
package com.esmee.poppick.service;

import com.esmee.poppick.dto.UserDto;
import com.esmee.poppick.model.Role;
import com.esmee.poppick.model.User;
import com.esmee.poppick.repository.RoleRepository;
import com.esmee.poppick.repository.UserRepository;
import com.esmee.poppick.security.JwtUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserDetailsServiceImpl userDetailsService; // voor diagnose

    // Registeren gebruiker (Quiztaker rol automatisch opgelegd). UDSI Wordt hier niet gebruikt.
    public void registerUser(UserDto userDto) {
        if (userRepository.existsByUsername(userDto.getUsername())) {
            throw new RuntimeException("Username is already taken");
        }

        Role quiztakerRole = roleRepository.findByName("QUIZTAKER")
                .orElseThrow(() -> new RuntimeException("Role QUIZTAKER not found"));

        Set<Role> roles = new HashSet<>();
        roles.add(quiztakerRole);

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setRoles(roles);

        userRepository.save(user);
    }

    //gebruiker logt in
    public String authenticateUser(String username, String password) {
        System.out.println("[AUTH] attempt username=" + username);
//koppelt token aan username en password
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(username, password);

        try {
            Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = jwtUtils.generateJwtToken(authentication);
            System.out.println("[AUTH] jwt issued");
            return jwt;

        } catch (AuthenticationException ax) {
            throw ax; // laat controller 401 teruggeven
        }
    }
}