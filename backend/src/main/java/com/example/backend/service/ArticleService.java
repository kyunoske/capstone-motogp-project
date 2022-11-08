package com.example.backend.service;

import com.example.backend.model.Article;
import com.example.backend.repo.ArticleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ArticleService {

    private final ArticleRepo repo;

    private final IdService idService;

    @Autowired
    public ArticleService(ArticleRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Article> getAllArticles() {
        return repo.findAll();
    }

    public Article addArticle(Article article) {
        article.setId(idService.generateId());
        return repo.save(article);
    }

    public Optional<Article> getArticleById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("There is no team with id: " + id);
        }
        return repo.findById(id);
    }
}
