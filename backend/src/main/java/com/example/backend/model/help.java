package com.example.backend.model;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class help {
    public static void main(String[] args) {
        System.out.println((new BCryptPasswordEncoder().encode("admin")));
    }
}
