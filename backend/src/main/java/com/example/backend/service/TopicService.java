package com.example.backend.service;

import com.example.backend.model.Topic;
import com.example.backend.repo.TopicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TopicService {

    private final TopicRepo repo;

    private final IdService idService;

    @Autowired
    public TopicService(TopicRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Topic> getAllTopics() {
        return repo.findAll();
    }

    public Topic addTopic(Topic topic) {
        topic.setId(idService.generateId());
        return repo.save(topic);
    }

    public Optional<Topic> getTopicById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("There is no team with id: " + id);
        }
        return repo.findById(id);
    }
}
