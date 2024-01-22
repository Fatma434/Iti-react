// src/store/reducers/favorites.js
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './store/actions/favorites';

const initialState = {
  movies: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        movies: state.movies.filter(movieId => movieId !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
