import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from 'src/pages/SignIn/SignIn';

export const AppRoute = () => (
  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/signin" element={<SignIn />} />
  </Routes>
);
