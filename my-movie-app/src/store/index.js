// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reduser';

const store = configureStore({
  reducer: rootReducer,
  // Add any additional configuration options if needed
});

export default store;
