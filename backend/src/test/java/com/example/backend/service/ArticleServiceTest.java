package com.example.backend.service;

import com.example.backend.model.Article;
import com.example.backend.repo.ArticleRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.*;

class ArticleServiceTest {

    private final ArticleRepo repo = mock(ArticleRepo.class);

    private final IdService idService = mock(IdService.class);

    private final ArticleService service = new ArticleService(repo, idService);

    @Test
    void getAllArticles() {
        // GIVEN
        Article article1 = new Article("1", "1", "1", "1,", "1", "1", "1");

        when(repo.findAll())
                .thenReturn(List.of(article1));

        // WHEN
        List<Article> actual = service.getAllArticles();

        // THEN
        List<Article> expected = List.of(article1);
        verify(repo).findAll();
    }

    @Test
    void addArticle() {
        // GIVEN
        Article article = new Article("1", "1,", "1", "1,", "1", "1", "1");
        when(repo.save(article)).thenReturn(article);

        // WHEN
        Article actual = service.addArticle(article);
        assertEquals(article, actual);
    }

    @Test
    void getArticleById() {

        Article article1 = new Article("1", "1", "1", "1,", "1", "1", "1");

        // GIVEN
        when(repo.findById("1"))
                .thenReturn(Optional.of(article1));

        // WHEN
        Optional<Article> actual = repo.findById("1");

        // THEN
        Optional<Article> expected = Optional.of(article1);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }
}