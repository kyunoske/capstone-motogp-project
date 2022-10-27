package com.example.backend.service;

import com.example.backend.model.Rider;
import com.example.backend.repo.RiderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class RiderService {

    private final RiderRepo repo;

    private final IdService idService;

    @Autowired
    public RiderService(RiderRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Rider> getAllRiders() {
        return repo.findAll();
    }

    public Optional<Rider> getRiderById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("There is no rider with id: " + id);
        }
        return repo.findById(id);
    }

    public Rider addRider(Rider rider) {
        rider.setId(idService.generateId());
        return repo.save(rider);
    }
}
