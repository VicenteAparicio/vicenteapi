
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Theatre from './pages/Theatre/Theatre';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="teatro" element={<Theatre />} />
      </Routes>
    </div>
  );
}

export default App;
