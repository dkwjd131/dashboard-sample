import * as React from 'react';
import { main } from '../assets/styles/main.styled';
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Monitoring from '../pages/monitor/Monitoring';
import Admin from '../pages/Admin';
import RoutesContainer from '../routes/RoutesContainer';

const Main = () => {
  return (
    <div css={main.container}>
      <RoutesContainer />
    </div>
  );
};

export default Main;
