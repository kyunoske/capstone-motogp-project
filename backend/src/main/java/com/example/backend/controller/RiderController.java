package com.example.backend.controller;

import com.example.backend.model.Rider;
import com.example.backend.service.RiderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/riders")
public class RiderController {

    private final RiderService riderService;

    @Autowired
    public RiderController(RiderService riderService) {
        this.riderService = riderService;
    }

    @GetMapping
    public List<Rider> getAllRiders() {
        return riderService.getAllRiders();
    }

    @GetMapping("/{id}")
    public Optional<Rider> getRiderById(@PathVariable String id) {
        return riderService.getRiderById(id);
    }

    @PostMapping
    public Rider addRider(@RequestBody Rider rider) {
        return riderService.addRider(rider);
    }
}
