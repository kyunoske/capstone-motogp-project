package com.example.backend.service;

import com.example.backend.model.Team;
import com.example.backend.repo.MotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TeamService {

    private final MotoRepo repo;

    private final IdService idService;

    @Autowired
    public TeamService(MotoRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Team> getAllTeams() {
        return repo.findAll();
    }

    public Team addTeam(Team team) {
        team.setId(idService.generateId());
        return repo.save(team);
    }

    public Optional<Team> getTeamById(String id) {
        if (!repo.existsById(id)) {
            throw new NoSuchElementException("There is no team with id: " + id);
        }
        return repo.findById(id);
    }

    public void deleteTeam(String id) {
        repo.deleteById(id);
    }

    public Team editTeam(String id, Team team) {
        repo.save(team);
        return team;
    }
}
