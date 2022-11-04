package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.model.AppUserDTO;
import com.example.backend.repo.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private AppUserRepo appUserRepo;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(AppUserRepo appUserRepo, PasswordEncoder passwordEncoder) {
        this.appUserRepo = appUserRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public String register(AppUserDTO appUserDTO) {

        String hashPassword = passwordEncoder.encode(appUserDTO.getPassword());

        AppUser appUser = new AppUser();
        appUser.setUsername(appUserDTO.getUsername());
        appUser.setPasswordHash(hashPassword);
        appUser.setRoles(List.of("USER"));

        return appUserRepo.save(appUser).getUsername();

    }

    public List<String> getAllUsernames() {

        return appUserRepo.findAll().stream()
                .map((user) -> user.getUsername())
                .toList();
    }
}