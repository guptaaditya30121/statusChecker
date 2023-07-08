
import { Route, Routes } from 'react-router-dom';
import React, { useEffect,useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Canteen from './pages/Canteen';
import Home from './pages/Home';
import Juice from './pages/Juice';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Stationary from './pages/Stationary';
import Update from './pages/Update';
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate();
  const [user , setUser] = useState("");
  const [auth , setAuth] = useState(false);
  const [shopauth , setShopauth] = useState(false);
  useEffect(()=>{
    console.log("hello");
    fetch("http://localhost:3002/", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => response.json())
      .then(responseJson => {
          console.log("hello");
          console.log(responseJson);
          // setUser(responseJson);
          if(responseJson.authenticated)
          {
            setAuth(true);
            setUser(user.username)
            toast.success('Welcome!! '+ responseJson.user.username, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }); 
          }
          else
          {
            setAuth(false);
            navigate("/");
            toast.error('You are Logged Out', {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            throw new Error("failed to authenticate user");
          }
      })
      .catch(error => {
          setAuth(false);
         
      });
  },[])

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
      
      <Route path="/" element={<SignIn auth={auth}/>}/>
      <Route path="/Home" element={<Home auth={auth}/>}/>
      <Route path="/Canteens" element={<Canteen auth={auth}/>}/>
      <Route path="/Juice-centres" element={<Juice auth={auth}/>}/>
      <Route path="/Stationaries" element={<Stationary auth={auth}/>}/>
      <Route path="/Status-updates" element={<Update/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Register1" element={<Register check={1}/>}/>
      <Route path="/Register2" element={<Register check={2}/>}/>
    </Routes>
    </div>
  );
}

export default App;
