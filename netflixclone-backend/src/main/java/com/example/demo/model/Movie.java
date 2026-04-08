package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String genre;
    private String imageUrl;
    private String bannerUrl;

//    @Column(name = "video_url");
    private String videoUrl;
}
