package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("riders")
public class Rider {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String nameInitials;
    private String nationality;
    private String bike;
    private String bikeNumber;
    private String dateOfBirth;
    private String height;
    private String weight;
    private String motoGPDebut;
    private String description;
    private String podiums;
    private String wins;
    private String championships;
    private String numOfRacesMotoGP;
    private String riderImage;
    private String image1;
    private String image2;
    private String image3;
}
