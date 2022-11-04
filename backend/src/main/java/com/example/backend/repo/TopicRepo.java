package com.example.backend.repo;

import com.example.backend.model.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepo extends MongoRepository<Topic, String> {
}
