
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Canteen from './pages/Canteen';
import Home from './pages/Home';
import Juice from './pages/Juice';
import Register from './pages/Register';
import Stationary from './pages/Stationary';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/Canteens" element={<Canteen/>}/>
      <Route path="/Juice-centres" element={<Juice/>}/>
      <Route path="/Stationaries" element={<Stationary/>}/>
      <Route path="/Status-updates" element={<Update/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Register1" element={<Register check={1}/>}/>
      <Route path="/Register2" element={<Register check={2}/>}/>
    </Routes>
    </div>
  );
}

export default App;
