package com.example.backend.service;

import com.example.backend.model.Rider;
import com.example.backend.repo.RiderRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class RiderServiceTest {

    private final RiderRepo repo = mock(RiderRepo.class);

    private final IdService idService = mock(IdService.class);

    private final RiderService service = new RiderService(repo, idService);

    @Test
    void getAllRiders() {
        // GIVEN
        Rider rider1 = new Rider("1", "name", "last", "nameInitials", "nationality", "bike", "1", "1", "1", "dateOfBirth", "height", "weight", "motoGPDebut", "description", "podiums", "wins", "championships", "numOfRacesMotoGP", "riderImage", "image1", "image2", "image3");

        when(repo.findAll())
                .thenReturn(List.of(rider1));

        // WHEN
        List<Rider> actual = service.getAllRiders();

        // THEN
        List<Rider> expected = List.of(rider1);
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void getRiderById() {
        Rider rider1 = new Rider("1", "name", "last", "nameInitials", "nationality", "bike", "1", "1", "1", "dateOfBirth", "height", "weight", "motoGPDebut", "description", "podiums", "wins", "championships", "numOfRacesMotoGP", "riderImage", "image1", "image2", "image3");

        // GIVEN
        when(repo.findById("1"))
                .thenReturn(Optional.of(rider1));

        // WHEN
        Optional<Rider> actual = repo.findById("1");

        // THEN
        Optional<Rider> expected = Optional.of(rider1);
        verify(repo).findById("1");
        assertEquals(expected, actual);
    }

    @Test
    void addRider() {
        //GIVEN
        Rider rider1 = new Rider("1", "name", "last", "nameInitials", "nationality", "bike", "1", "1", "1", "dateOfBirth", "height", "weight", "motoGPDebut", "description", "podiums", "wins", "championships", "numOfRacesMotoGP", "riderImage", "image1", "image2", "image3");
        when(repo.save(rider1)).thenReturn(rider1);

        //WHEN
        Rider actual = service.addRider(rider1);

        //THEN
        verify(repo).save(rider1);
        assertEquals(rider1, actual);
    }
}