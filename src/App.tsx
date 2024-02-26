import React from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import reset from './assets/styles/reset';
import { Global } from '@emotion/react';

function App() {
  return (
    <div className="App">
      <Global styles={reset} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
