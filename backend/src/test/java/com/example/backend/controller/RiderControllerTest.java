package com.example.backend.controller;

import com.example.backend.model.Rider;
import com.example.backend.repo.RiderRepo;
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
class RiderControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private RiderRepo riderRepo;

    @MockBean
    private IdService idService;

    @Test
    void getAllRiders() throws Exception {
        // GIVEN
        riderRepo.save(new Rider("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));
        riderRepo.save(new Rider("2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id":"1",
                        "firstName":"1",
                        "lastName": "1",
                        "nameInitials": "1",
                        "nationality": "1",
                        "bike": "1",
                        "bikeNumber": "1",
                        "dateOfBirth": "1",
                        "height": "1",
                        "weight":  "1",
                        "motoGPDebut": "1",
                        "description": "1",
                        "podiums": "1",
                        "wins": "1",
                        "championships": "1",
                        "numOfRacesMotoGP": "1",
                        "riderImage": "1",
                        "image1": "1",
                        "image2": "1",
                        "image3": "1"
                    },
                    {
                        "id":"2",
                        "firstName":"1",
                        "lastName": "1",
                        "nameInitials": "1",
                        "nationality": "1",
                        "bike": "1",
                        "bikeNumber": "1",
                        "dateOfBirth": "1",
                        "height": "1",
                        "weight":  "1",
                        "motoGPDebut": "1",
                        "description": "1",
                        "podiums": "1",
                        "wins": "1",
                        "championships": "1",
                        "numOfRacesMotoGP": "1",
                        "riderImage": "1",
                        "image1": "1",
                        "image2": "1",
                        "image3": "1"
                    }
                ]
                """;

        // WHEN & THEN
        mockMvc.perform(get("/api/riders"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));


    }

    @Test
    void addRider() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                {
                    "firstName":"1",
                    "lastName": "1",
                    "nameInitials": "1",
                    "nationality": "1",
                    "bike": "1",
                    "bikeNumber": "1",
                    "dateOfBirth": "1",
                    "height": "1",
                    "weight":  "1",
                    "motoGPDebut": "1",
                    "description": "1",
                    "podiums": "1",
                    "wins": "1",
                    "championships": "1",
                    "numOfRacesMotoGP": "1",
                    "riderImage": "1",
                    "image1": "1",
                    "image2": "1",
                    "image3": "1"
                }
                """;

        String expectedJSON = """
                {
                   "id":"1",
                   "firstName":"1",
                   "lastName": "1",
                   "nameInitials": "1",
                   "nationality": "1",
                   "bike": "1",
                   "bikeNumber": "1",
                   "dateOfBirth": "1",
                   "height": "1",
                   "weight":  "1",
                   "motoGPDebut": "1",
                   "description": "1",
                   "podiums": "1",
                   "wins": "1",
                   "championships": "1",
                   "numOfRacesMotoGP": "1",
                   "riderImage": "1",
                   "image1": "1",
                   "image2": "1",
                   "image3": "1" 
                }
                """;

        // WHEN & THEN
        mockMvc.perform(
                        post("/api/riders")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }
}