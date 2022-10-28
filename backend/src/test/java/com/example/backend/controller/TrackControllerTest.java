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
        trackRepo.save(new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1"));
        trackRepo.save(new Track("2", "1", "1", "1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id": "1",
                        "name": "1",
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
}