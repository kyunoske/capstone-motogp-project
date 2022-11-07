package com.example.backend.controller;

import com.example.backend.model.Team;
import com.example.backend.repo.MotoRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
class TeamControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private MotoRepo motoRepo;

    @MockBean
    private IdService idService;

    @Test
    void getAllTeams() throws Exception {
        // GIVEN
        motoRepo.save(new Team("1", "Ducati", "yup", "1", "1", "1", "logo", "1", "2", "3", "4", "5", "10", "1"));
        motoRepo.save(new Team("2", "Ducati", "yup", "1", "1", "1", "logo", "1", "2", "3", "4", "5", "10", "1"));

        // WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id": "1",
                        "name": "Ducati",
                        "description": "yup",
                        "logo": "logo",
                        "rider1": "1",
                        "rider2": "1",
                        "rider3": "1",
                        "image1":"1",
                        "image2":"2",
                        "image3":"3",
                        "image4":"4",
                        "image5":"5",
                        "wins":"10",
                        "championships": "1"
                    },
                    {
                        "id": "2",
                        "name": "Ducati",
                        "description": "yup",
                        "logo": "logo",
                        "rider1": "1",
                        "rider2": "1",
                        "rider3": "1",
                        "image1":"1",
                        "image2":"2",
                        "image3":"3",
                        "image4":"4",
                        "image5":"5",
                        "wins":"10",
                        "championships": "1"
                    }
                ]
                """;

        // WHEN & THEN
        mockMvc.perform(get("/api/teams"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @Test
    void addTeam() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                {
                            "name": "Ducati",
                            "description": "yup",
                            "logo": "logo",
                            "rider1": "1",
                            "rider2": "1",
                            "rider3": "1",
                            "image1":"1",
                            "image2":"2",
                            "image3":"3",
                            "image4":"4",
                            "image5":"5",
                            "wins":"10",
                            "championships": "1"
                    
                }
                """;

        String expectedJSON = """
                {
                            "id": "1",
                            "name": "Ducati",
                            "description": "yup",
                            "logo": "logo",
                            "rider1": "1",
                            "rider2": "1",
                            "rider3": "1",
                            "image1":"1",
                            "image2":"2",
                            "image3":"3",
                            "image4":"4",
                            "image5":"5",
                            "wins":"10",
                            "championships": "1"
                    
                }
                """;

        // WHEN & THEN
        mockMvc.perform(
                        post("/api/teams")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }
}