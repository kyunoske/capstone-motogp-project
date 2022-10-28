package com.example.backend.service;

import com.example.backend.model.Track;
import com.example.backend.repo.TrackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TrackService {

    private final TrackRepo repo;

    private final IdService idService;

    @Autowired
    public TrackService(TrackRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Track> getAllTracks() {
        return repo.findAll();
    }

    public Optional<Track> getTrackById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("There is no track with id: " + id);
        }
        return repo.findById(id);
    }

    public Track addTrack(Track track) {
        track.setId(idService.generateId());
        return repo.save(track);
    }
}
