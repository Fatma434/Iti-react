import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../store/actions/favorites';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <Row>
        {favorites.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: '10px' }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <h3>{movie.vote_count}</h3>
                  <p>{movie.overview}</p>
                  <p>{movie.release_date}</p>
                </Card.Text>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="favorite-icon"
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleRemoveFavorite(movie.id)}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favorites;
