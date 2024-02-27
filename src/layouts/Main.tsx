import * as React from 'react';
import { main } from '../assets/styles/layout';
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';

const Main = () => {
  return (
    <div css={main.container}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Main;
