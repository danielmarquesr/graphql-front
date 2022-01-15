import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, ConfirmEmail } from 'src/pages';

export const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/confirm" element={<ConfirmEmail />} />
  </Routes>
);
