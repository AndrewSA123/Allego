import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index.tsx';
import Layout from './pages/Layout.tsx';
import MovieDetails from './pages/MovieDetails.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index />} />
            <Route path='entity/:imdbID' element={<MovieDetails />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
