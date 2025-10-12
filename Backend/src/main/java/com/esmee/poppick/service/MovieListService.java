package com.esmee.poppick.service;

import com.esmee.poppick.dto.CreateMovieListDto;
import com.esmee.poppick.model.Movie;
import com.esmee.poppick.model.MovieList;
import com.esmee.poppick.model.User;
import com.esmee.poppick.repository.MovieListRepository;
import com.esmee.poppick.repository.MovieRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import com.esmee.poppick.repository.UserRepository;


import java.util.List;

@Service
public class MovieListService {

    private final MovieListRepository movieListRepository;
    private final MovieRepository movieRepository;
    private final UserRepository userRepository;

    public MovieListService(MovieListRepository movieListRepository, MovieRepository movieRepository, UserRepository userRepository) {
        this.movieListRepository = movieListRepository;
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
    }

    public MovieList createList(CreateMovieListDto dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        MovieList newList = new MovieList();
        newList.setListName(dto.getListName());
        newList.setUser(user);

        return movieListRepository.save(newList);
    }

    public List<MovieList> getAllListsForCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        return movieListRepository.findByUser_Id(user.getId());
    }

    public MovieList addMoviesToList(long listId, List<Long> movieIds) {
        MovieList List = movieListRepository.findById(listId)
                .orElseThrow(() -> new RuntimeException("List not found"));
        List<Movie> movies = movieRepository.findAllById(movieIds);
        List.getMovies().addAll(movies);

        return movieListRepository.save(List);
    }
    public void deleteList(Long listId) {
        if (!movieListRepository.existsById(listId)) {
            throw new RuntimeException("List not found");
        }
        movieListRepository.deleteById(listId);
    }

}

