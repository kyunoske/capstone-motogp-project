package com.example.backend.controller;

import com.example.backend.repo.AppUserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    AppUserRepo repo;

    @Test
    void login() throws Exception {
//        repo.save(new AppUser("1", "1", List.of("USER")));
//
//        String expectedBody = """
//                        {
//                            "username": "1",
//                            "roles": [
//                                        "USER"
//                                     ]
//                        }
//                """;
//
//        String happyBody = """
//                       {
//                            "username": "1",
//                            "password": "1"
//                       }
//                """;
//
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/user/login")
//                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE))
//                .andExpect(status().isOk())
//                .andExpect(content().json(expectedBody));

    }

    @Test
    void logout() {
    }

    @Test
    void register() {
    }
}