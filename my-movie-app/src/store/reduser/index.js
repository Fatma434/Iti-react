// src/store/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit" ;
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Add other reducers here if needed
});

export default rootReducer;
