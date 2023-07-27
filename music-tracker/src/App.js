import logo from './logo.svg';
import './App.css';
import { Include } from './Pages/Include/Include';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Include />
    </div>
  );
}

export default App;
