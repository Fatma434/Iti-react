// src/components/MovieDetails.js
// MovieDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToFavorites, removeFromFavorites, updateFavoritesCount } from '../store/actions/favorites';
import './MovieDetails.css';

import axiosInstance from '../api/Config';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);

  useEffect(() => {
    const apiUrl = `/movie/${movieId}`;

    axiosInstance
      .get(apiUrl)
      .then((response) => setMovieDetails(response.data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const isFavorite = favorites && favorites.some((movie) => movie.id === movieDetails.id);

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(movieDetails));
      dispatch(updateFavoritesCount(favorites.length + 1));
    } else {
      dispatch(removeFromFavorites(movieDetails.id));
      dispatch(updateFavoritesCount(favorites.length - 1));
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="img-fluid rounded"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`favorite-icon ${isFavorite ? 'filled' : 'bordered'}`}
            onClick={handleAddToFavorites}
          />
        </Col>
        <Col xs={12} md={6} lg={8}>
          <h2>{movieDetails.title}</h2>
          <h3>{movieDetails.vote_count}</h3>
          <p>{movieDetails.overview}</p>
          <p>{movieDetails.release_date}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
