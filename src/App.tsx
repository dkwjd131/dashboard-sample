import React from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Home from './pages/Home';
import { reset } from './assets/styles/reset.styled';
import { Global } from '@emotion/react';
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Global styles={reset} />
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
