package com.example.demo.controller;

import com.example.demo.model.Movie;
import com.example.demo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> getMovies() {
        return movieService.getAllMovies();
    }
}