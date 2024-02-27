import * as React from 'react';
import { main } from '../assets/styles/layout';
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';

const Main = () => {
  return (
    <div css={main.container}>
      <div>main</div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Main;
