package com.example.backend.controller;

import com.example.backend.model.AppUserDTO;
import com.example.backend.model.CreateUserDto;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    List<String> getAllUsernames() {
        return userService.getAllUsernames();
    }

    @GetMapping("/login")
    public AppUserDTO login() {
        // Ask Security Context for User information
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        return userService.getUserInfoDtoByUsername(username);
    }

    @GetMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @PostMapping("/register")
    public String register(@RequestBody CreateUserDto createUserDto) {

        return userService.register(createUserDto);
    }
}
