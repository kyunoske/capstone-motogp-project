package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("articles")
public class Article {

    @Id
    private String id;

    private String image;
    private String image2;
    private String image3;
    private String title;
    private String text;
    private String articleNumber;
}
