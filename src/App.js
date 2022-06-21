import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './Home';
import Upload from './Upload';

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/upload">upload</Link>
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="upload" index element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
