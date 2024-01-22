// src/store/actions/favorites.js
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (movieId) => ({
  type: ADD_TO_FAVORITES,
  payload: movieId,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});
export const UPDATE_FAVORITES_COUNT = 'UPDATE_FAVORITES_COUNT';

export const updateFavoritesCount = (count) => ({
  type: UPDATE_FAVORITES_COUNT,
  payload: count,
});