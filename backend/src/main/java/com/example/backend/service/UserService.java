package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.model.AppUserDTO;
import com.example.backend.model.CreateUserDto;
import com.example.backend.repo.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {

    private AppUserRepo appUserRepo;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(AppUserRepo appUserRepo, PasswordEncoder passwordEncoder) {
        this.appUserRepo = appUserRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public String register(CreateUserDto createUserDto) {

        // Hash password (with BCrypt)
        String hashedPassword = passwordEncoder.encode(createUserDto.getPassword());

        // Create AppUser
        AppUser appUser = new AppUser();
        appUser.setUsername(createUserDto.getUsername());
        appUser.setPasswordHash(hashedPassword);
        appUser.setRoles(List.of("USER"));

        // Save AppUser in DB
        return appUserRepo.save(appUser).getUsername();

    }

    public List<String> getAllUsernames() {

        return appUserRepo.findAll().stream()
                .map((user) -> user.getUsername())
                .toList();
    }

    public AppUserDTO getUserInfoDtoByUsername(String username) {
        AppUser appUser = appUserRepo.findById(username)
                .orElseThrow(() -> new NoSuchElementException());

        return AppUserDTO.builder()
                .username(appUser.getUsername())
                .roles(appUser.getRoles())
                .build();
    }
}