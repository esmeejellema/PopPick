package com.esmee.poppick.service;

import com.esmee.poppick.dto.RecommendationDto;
import com.esmee.poppick.model.Movie;
import com.esmee.poppick.model.Recommendation;
import com.esmee.poppick.model.User;
import com.esmee.poppick.repository.MovieRepository;
import com.esmee.poppick.repository.RecommendationRepository;
import com.esmee.poppick.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecommendationService {

    private final RecommendationRepository recommendationRepository;
    private final MovieRepository movieRepository;
    private final UserRepository userRepository;

    public RecommendationService(RecommendationRepository recommendationRepository,
                                 MovieRepository movieRepository,
                                 UserRepository userRepository) {
        this.recommendationRepository = recommendationRepository;
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
    }

    /**
     * Creates a new recommendation for a given user and movie.
     * Called when a user completes the quiz and a movie is selected.
     */
    @Transactional
    public RecommendationDto createRecommendation(Long userId, Long movieId) {
        // Fetch the User
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));

        // Fetch the Movie
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new RuntimeException("Movie not found with ID: " + movieId));

        // Create new Recommendation entity
        Recommendation recommendation = new Recommendation();
        recommendation.setUser(user);
        recommendation.setMovie(movie);

        // Save to DB
        Recommendation saved = recommendationRepository.save(recommendation);

        // Return DTO for frontend
        return new RecommendationDto(
                saved.getId(),
                user.getId(),
                movie.getId(),
                movie.getTitle()
        );
    }

    /**
     * Returns all recommendations belonging to a specific user.
     */
    public List<RecommendationDto> getRecommendationsByUser(Long userId) {
        return recommendationRepository.findByUserId(userId)
                .stream()
                .map(r -> new RecommendationDto(
                        r.getId(),
                        r.getUser().getId(),
                        r.getMovie().getId(),
                        r.getMovie().getTitle()
                ))
                .collect(Collectors.toList());
    }
}
