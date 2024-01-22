// src/store/store.js
import { createStore } from "@reduxjs/toolkit";
import rootReducer from './reduser/index';

const store = createStore(rootReducer);

export default store;
