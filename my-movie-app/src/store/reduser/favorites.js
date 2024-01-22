

// src/store/reducers/favorites.js
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, UPDATE_FAVORITES_COUNT } from '../actions/favorites';

const initialState = {
  movies: [],
  count: 0,
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
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case UPDATE_FAVORITES_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    // Add other cases if needed

    default:
      return state;
  }
};

export default favoritesReducer;
