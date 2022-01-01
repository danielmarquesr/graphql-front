import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, SignIn } from 'src/pages';

export const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
  </Routes>
);
