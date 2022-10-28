package com.example.backend.controller;

import com.example.backend.model.Track;
import com.example.backend.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tracks")
public class TrackController {

    private final TrackService trackService;

    @Autowired
    public TrackController(TrackService trackService) {
        this.trackService = trackService;
    }

    @GetMapping
    public List<Track> getAllTracks() {
        return trackService.getAllTracks();
    }

    @GetMapping("/{id}")
    public Optional<Track> getTrackById(@PathVariable String id) {
        return trackService.getTrackById(id);
    }

    @PostMapping
    public Track addTrack(@RequestBody Track track) {
        return trackService.addTrack(track);
    }
}
