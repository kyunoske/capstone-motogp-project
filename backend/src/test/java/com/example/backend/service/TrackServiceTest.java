package com.example.backend.service;

import com.example.backend.model.Track;
import com.example.backend.repo.TrackRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class TrackServiceTest {

    private final TrackRepo repo = mock(TrackRepo.class);

    private final IdService idService = mock(IdService.class);

    private final TrackService service = new TrackService(repo, idService);

    @Test
    void getAllTracks() {
        // GIVEN
        Track track1 = new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1");

        when(repo.findAll())
                .thenReturn(List.of(track1));

        // WHEN
        List<Track> actual = service.getAllTracks();

        // THEN
        List<Track> expected = List.of(track1);
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void getTrackById() {
        Track track1 = new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1");

        // GIVEN
        when(repo.findById("1"))
                .thenReturn(Optional.of(track1));

        // WHEN
        Optional<Track> actual = repo.findById("1");

        // THEN
        Optional<Track> expected = Optional.of(track1);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }

    @Test
    void addTrack() {
        // GIVEN
        Track track1 = new Track("1", "1", "1", "1", "1", "1", "1", "1", "1", "1");
        when(repo.save(track1)).thenReturn(track1);

        // WHEN
        Track actual = service.addTrack(track1);

        // THEN
        verify(repo).save(track1);
        assertEquals(track1, actual);
    }
}