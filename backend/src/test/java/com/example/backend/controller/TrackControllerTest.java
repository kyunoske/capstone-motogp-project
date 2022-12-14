package com.example.backend.controller;

import com.example.backend.model.Track;
import com.example.backend.repo.TrackRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
class TrackControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private TrackRepo trackRepo;

    @MockBean
    private IdService idService;

    @Test
    void getAllTracks() throws Exception {
        // GIVEN
        trackRepo.save(new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));
        trackRepo.save(new Track("2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id": "1",
                        "name": "1",
                        "grandPrixName": "1",
                        "round": "1",
                        "description": "1",
                        "country": "1",
                        "countryFlag": "1",
                        "date": "1",
                        "lapRecord": "1",
                        "lapRecordHolder": "1",
                        "lap": "1",
                        "image": "1"
                    },
                    {
                        "id": "2",
                        "name": "1",
                        "grandPrixName": "1",
                        "round": "1",
                        "description": "1",
                        "country": "1",
                        "countryFlag": "1",
                        "date": "1",
                        "lapRecord": "1",
                        "lapRecordHolder": "1",
                        "lap": "1",
                        "image": "1"
                    }
                ]
                """;

        // WHEN & THEN
        mockMvc.perform(get("/api/tracks"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @Test
    void addTrack() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                    {
                        "name": "1",
                        "grandPrixName": "1",
                        "round": "1",
                        "description": "1",
                        "country": "1",
                        "countryFlag": "1",
                        "date": "1",
                        "lapRecord": "1",
                        "lapRecordHolder": "1",
                        "lap": "1",
                        "image": "1"
                    }
                """;

        String expectedJSON = """
                    {
                        "id": "1",
                        "name": "1",
                        "grandPrixName": "1",
                        "round": "1",
                        "description": "1",
                        "country": "1",
                        "countryFlag": "1",
                        "date": "1",
                        "lapRecord": "1",
                        "lapRecordHolder": "1",
                        "lap": "1",
                        "image": "1"
                    }
                """;

        // WHEN & THEN
        mockMvc.perform(
                        post("/api/tracks")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @Test
    @WithMockUser(username = "admin", password = "123")
    void editTrack_shouldEditTrackWithId() throws Exception {

        // GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                    {
                        "id": "1",
                        "name": "1",
                        "grandPrixName": "1",
                        "round": "1",
                        "description": "1",
                        "country": "1",
                        "countryFlag": "1",
                        "date": "1",
                        "lapRecord": "1",
                        "lapRecordHolder": "1",
                        "lap": "1",
                        "image": "1"
                    }
                """;

        String expectedJSON = """
                    {
                        "id": "1",
                        "name": "1",
                        "grandPrixName": "1",
                        "round": "1",
                        "description": "1",
                        "country": "1",
                        "countryFlag": "1",
                        "date": "1",
                        "lapRecord": "1",
                        "lapRecordHolder": "1",
                        "lap": "1",
                        "image": "1"
                    }
                """;

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/api/tracks/{id}", "1")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @Test
    @WithMockUser(username = "admin", password = "123")
    void getTrackById_shouldReturnThisTrackById() throws Exception {

        // GIVEN
        when(idService.generateId()).thenReturn("1");

        trackRepo.save(new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/tracks/{id}", "1")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "admin", password = "123")
    void deleteTrack_trackShouldBeDeleted() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("1");

        trackRepo.save(new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/tracks/{id}", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/tracks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                                                                []
                        """));
    }
}