import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Mounting from './pages/Mounting';
import Updating from './pages/Updating';
import Unmounting from './pages/Unmounting';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/mounting' element={<Mounting />} />
        <Route path='/updating' element={<Updating />} />
        <Route path='/unmounting' element={<Unmounting />} />
      </Routes>
    </div>
  );
}

export default App;
