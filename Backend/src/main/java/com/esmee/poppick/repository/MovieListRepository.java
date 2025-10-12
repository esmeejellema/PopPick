package com.esmee.poppick.repository;

import com.esmee.poppick.model.MovieList;
import com.esmee.poppick.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieListRepository extends JpaRepository<MovieList, Long> {
    List<MovieList> findByUser_Id(Long userId);
}
