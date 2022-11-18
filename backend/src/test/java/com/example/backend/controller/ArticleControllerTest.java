package com.example.backend.controller;

import com.example.backend.model.Article;
import com.example.backend.repo.ArticleRepo;
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
class ArticleControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ArticleRepo articleRepo;

    @MockBean
    private IdService idService;

    @Test
    void getAllArticles() throws Exception {
        // GIVEN
        articleRepo.save(new Article("1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        String expectedJSON = """
                [
                    {
                        "id": "1",
                        "image": "1",
                        "image2": "1",
                        "image3": "1",
                        "title": "1",
                        "text": "1",
                        "articleNumber": "1"
                    }
                ]
                """;

        // WHEN & THEN
        mockMvc.perform(get("/api/articles"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @Test
    void addArticle() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                    {
                        "image": "1",
                        "image2": "1",
                        "image3": "1",
                        "title": "1",
                        "text": "1",
                        "articleNumber": "1"  
                    }   
                """;

        String expectedJSON = """
                    {
                        "id": "1",
                        "image": "1",
                        "image2": "1",
                        "image3": "1",
                        "title": "1",
                        "text": "1",
                        "articleNumber": "1"
                    }
                """;

        // WHEN & THEN
        mockMvc.perform(post("/api/articles")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @Test
    void editArticle_shouldEditArticleWithId() throws Exception {

        // GIVEN

        String requestBody = """
                    {
                        "id": "1",
                        "image": "1",
                        "image2": "1",
                        "image3": "1",
                        "title": "1",
                        "text": "1",
                        "articleNumber": "1"  
                    }   
                """;

        String expectedJSON = """
                    {
                        "id": "1",
                        "image": "1",
                        "image2": "1",
                        "image3": "1",
                        "title": "1",
                        "text": "1",
                        "articleNumber": "1"
                    }
                """;

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/api/articles/{id}", "1")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

    @Test
    @WithMockUser(username = "admin", password = "123")
    void getArticleById_shouldReturnThisArticleById() throws Exception {

        // GIVEN

        articleRepo.save(new Article("1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/articles/{id}", "1")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "admin", password = "123")
    void deleteArticle_shouldBeDeleted() throws Exception {
        // GIVEN

        articleRepo.save(new Article("1", "1", "1", "1", "1", "1", "1"));

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/articles/{id}", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/articles")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                                                                []
                        """));
    }
}