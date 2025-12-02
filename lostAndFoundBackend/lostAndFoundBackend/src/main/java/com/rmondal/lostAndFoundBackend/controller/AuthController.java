package com.rmondal.lostAndFoundBackend.controller;

import com.rmondal.lostAndFoundBackend.dto.LoginRequest;
import com.rmondal.lostAndFoundBackend.model.User;
import com.rmondal.lostAndFoundBackend.repository.UserRepository;
import com.rmondal.lostAndFoundBackend.service.JwtService;
import com.rmondal.lostAndFoundBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }


    //new login endpoint
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        //finding the user
        User user=userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(()->new RuntimeException("User not found"));

        //password checker
        if(passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return jwtService.generateToken(user.getUsername());
        }
        else {
            throw new RuntimeException("Invalid credentials");
        }

    }
}
