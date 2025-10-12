package com.esmee.poppick.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;//Java package for JPA, provides annotations to map java classes to database tables.

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "movies")  // matches your PostgreSQL table name
public class Movie {

    @Id
    private Long id;
    private String title;
    private String genre;

    @Column(name = "length_in_minutes", nullable = false)
    private int length;

    @Column(name = "release_year", nullable = false)
    private int releaseYear;

    @Column(name = "streaming_service", nullable = false)
    private String streamingService;

    @ManyToMany(mappedBy = "movies")
    @JsonIgnore
    private List<MovieList> movieLists = new ArrayList<>();

    // Default constructor (required by JPA)
    public Movie() {
    }

    // Constructor with fields (optional)
    public Movie(long id, String title, String genre, int length, int releaseYear, String streamingService) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.releaseYear = releaseYear;
        this.streamingService = streamingService;
    }

    public Movie(String genre, int length, int releaseYear, String streamingService) {
        this.genre = genre;
        this.length = length;
        this.releaseYear = releaseYear;
        this.streamingService = streamingService;
    }
    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getStreamingService() {
        return streamingService;
    }

    public void setStreamingService(String streamingService) {
        this.streamingService = streamingService;
    }

    public List<MovieList> getMovieLists() {
        return movieLists;
    }

    public void setMovieLists(List<MovieList> movieLists) {
        this.movieLists = movieLists;
    }
}
