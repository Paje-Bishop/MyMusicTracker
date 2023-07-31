import './App.css';
import React from 'react';
import { Header } from './Components/Header/Header';

import { Main } from './Pages/Main/Main';
import { Redirect } from './Pages/Redirect/Redirect';

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
