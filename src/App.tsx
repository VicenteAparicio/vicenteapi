
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
