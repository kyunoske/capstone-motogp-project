package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("teams")
public class Team {

    @Id
    private String id;

    private String name;
    private String description;
    private String logo;
    private String image1;
    private String image2;
    private String image3;
    private String image4;
    private String image5;
    private String wins;
    private String championships;
}
