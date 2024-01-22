// Routers.js
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


const MovieList = lazy(() => import('../compontent/MovieList'));
const MovieDetails = lazy(() => import('../compontent/MovieDetails'));
const Favorites = lazy(() => import('../compontent/Favorites'));

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        
      </Routes>
    </Suspense>
  );
};

export default Routers;
