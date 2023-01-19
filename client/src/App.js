
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Canteen from './pages/Canteen';
import Home from './pages/Home';
import Juice from './pages/Juice';
import Stationary from './pages/Stationary';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/Canteens" element={<Canteen/>}/>
      <Route path="/Juice-centres" element={<Juice/>}/>
      <Route path="/Stationaries" element={<Stationary/>}/>
      <Route path="/Status-updates" element={<Update/>}/>
    </Routes>
    </div>
  );
}

export default App;
