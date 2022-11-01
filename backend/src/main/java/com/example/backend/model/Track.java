package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("tracks")
public class Track {

    @Id
    private String id;

    private String name;
    private String grandPrixName;
    private String round;
    private String description;
    private String country;
    private String countryFlag;
    private String date;
    private String lapRecord;
    private String lapRecordHolder;
    private String lap;
    private String image;
}
