package com.esmee.poppick.dto;
import java.util.List;

public class AddMoviesToListDto {
    private List<Long> movieIds;

    public List<Long> getMovieIds() {
        return movieIds;
    }

    public void setMovieIds(List<Long> movieIds) {
        this.movieIds = movieIds;
    }
}
