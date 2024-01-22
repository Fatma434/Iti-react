// MovieList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions/favorites';
import axiosInstance from '../api/Config';
import  './MovieList.css';
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get('/movie/popular')
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const isFavorite = (movieId) => favorites.some((movie) => movie.id === movieId);

  const handleToggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div>
      <br/>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Link to={`/movie-details/${movie.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.release_date}</Card.Text>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`favorite-icon ${isFavorite(movie.id) ? 'filled' : 'bordered'}`}
                    onClick={() => handleToggleFavorite(movie)}
                  />
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
