package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.repo.AppUserRepo;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppUserDetailsService implements UserDetailsService {

    private final AppUserRepo appUserRepo;

    public AppUserDetailsService(AppUserRepo appUserRepo) {
        this.appUserRepo = appUserRepo;
    }

    public AppUser addUser(AppUser user) {
        return appUserRepo.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = appUserRepo.findById(username).orElse(null);
        if (user == null) {
            return null;
        }

        return new User(user.getUsername(), user.getPasswordHash(), extractSimpleGrantedAuthorities(user));
    }

    private List<SimpleGrantedAuthority> extractSimpleGrantedAuthorities(AppUser user) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (String s : user.getRoles()) {
            SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(s);
            authorities.add(simpleGrantedAuthority);
        }
        return authorities;
    }

}
