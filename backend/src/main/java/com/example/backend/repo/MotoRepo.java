package com.example.backend.repo;

import com.example.backend.model.Team;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotoRepo extends MongoRepository<Team, String> {
}
