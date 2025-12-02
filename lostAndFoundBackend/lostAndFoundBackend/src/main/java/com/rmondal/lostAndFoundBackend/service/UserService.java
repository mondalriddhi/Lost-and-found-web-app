package com.rmondal.lostAndFoundBackend.service;

import com.rmondal.lostAndFoundBackend.model.User;
import com.rmondal.lostAndFoundBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        if(userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists!");
        }

        String encodedPassword=passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        if(user.getRole()==null) {
            user.setRole("USER");
        }

        return userRepository.save(user);
    }
}
