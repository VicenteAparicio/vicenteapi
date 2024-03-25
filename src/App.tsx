
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header';
import Home from './pages/home/home';
import Theatre from './pages/theatre/theatre';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/vicenteapi" element={<Home />} />
        <Route path="/vicenteapi/Teatro" element={<Theatre />} />
      </Routes>
    </div>
  );
}

export default App;
