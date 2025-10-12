package com.esmee.poppick.dto;

import java.time.LocalDateTime;

public class RecommendationDto {
    private Long id;
    private Long userId;
    private Long movieId;
    private String movieTitle;

    // Constructor
    public RecommendationDto(Long id, Long userId, Long movieId, String movieTitle) {
        this.id = id;
        this.userId = userId;
        this.movieId = movieId;
        this.movieTitle = movieTitle;
    }

    // Getters
    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public Long getMovieId() { return movieId; }
    public String getMovieTitle() { return movieTitle; }
}

