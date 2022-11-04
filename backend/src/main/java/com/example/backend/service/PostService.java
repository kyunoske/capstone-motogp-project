package com.example.backend.service;

import com.example.backend.model.Post;
import com.example.backend.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepo repo;

    private final IdService idService;

    @Autowired
    public PostService(PostRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Post> getAllPosts() {
        return repo.findAll();
    }

    public Post addPost(Post post) {
        post.setId(idService.generateId());
        return repo.save(post);
    }

    public Optional<Post> getPostById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("There is no team with id: " + id);
        }
        return repo.findById(id);
    }
}
