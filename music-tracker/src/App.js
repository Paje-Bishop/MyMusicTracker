import './App.css';
import { Header } from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Main } from './Pages/Main/Main';
import { Redirect } from './Pages/Redirect/Redirect';

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
    </div>
  );
}

export default App;
