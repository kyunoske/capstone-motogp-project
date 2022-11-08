package com.example.backend.service;

import com.example.backend.model.Team;
import com.example.backend.repo.MotoRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class TeamServiceTest {

    private final MotoRepo repo = mock(MotoRepo.class);
    private final IdService idService = mock(IdService.class);
    private final TeamService service = new TeamService(repo, idService);

    @Test
    void getAllTeams() {
        // GIVEN
        Team team1 = new Team("1", "name", "description", "logo", "1", "1", "1", "1", "2", "3", "4", "5", "10", "1");

        when(repo.findAll())
                .thenReturn(List.of(team1));

        // WHEN
        List<Team> actual = service.getAllTeams();

        // THEN
        List<Team> expected = List.of(team1);
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addTeam() {
        // GIVEN
        Team team = new Team("1", "name", "description", "logo", "1", "1", "1", "1", "2", "3", "4", "5", "10", "1");
        when(repo.save(team)).thenReturn(team);

        // WHEN
        Team actual = service.addTeam(team);

        // THEN
        verify(repo).save(team);
        assertEquals(team, actual);
    }

    @Test
    void getTeamById() {

        Team team1 = new Team("1", "name", "description", "logo", "1", "1", "1", "1", "2", "3", "4", "5", "10", "1");

        // GIVEN
        when(repo.findById("1"))
                .thenReturn(Optional.of(team1));

        // WHEN
        Optional<Team> actual = repo.findById("1");

        // THEN
        Optional<Team> expected = Optional.of(team1);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }

    @Test
    void teamIsDeleted_WhenDeleted() {
        Team team1 = new Team("1", "name", "description", "logo", "1", "1", "1", "1", "2", "3", "4", "5", "10", "1");

        // GIVEN
        when(repo.findById("1")).thenReturn(Optional.ofNullable(team1));

        // WHEN
        service.deleteTeam("1");

        // THEN
        verify(repo).deleteById("1");
    }

    @Test
    void teamIsEdited_WhenEdited() {
        Team team1 = new Team("1", "name", "description", "logo", "1", "1", "1", "1", "2", "3", "4", "5", "10", "1");

        // GIVEN
        when(service.editTeam("1", team1)).thenReturn(team1);
        when(repo.existsById("1")).thenReturn(true);

        // WHEN
        Team actual = service.editTeam("1", team1);

        // THEN
        assertEquals(team1, actual);
    }
}