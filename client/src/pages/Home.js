import React, { useEffect,useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link, redirect } from 'react-router-dom';
//import { ToastContainer, toast } from 'react-toastify';
import '../pages/home.css';
export default function Home() {
  const navigate = useNavigate();
  const [user , setUser] = useState("");
  const [auth , setAuth] = useState(false);
  useEffect(()=>{
    fetch("http://localhost:3002/", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
       
        console.log(response);
        if (response.status === 200) return response.json();
        console.log("not done");
        navigate('/');
        throw new Error("failed to authenticate user");
        //correct way to stop the further then chain
        
      })
      .then(responseJson => {
        // this.setState({
        //   authenticated: true,
        //   user: responseJson.user
        // });
          setUser(responseJson.user);
          setAuth(true);
      })
      .catch(error => {
        // this.setState({
        //   authenticated: false,
        //   error: "Failed to authenticate user"
        // });
          setAuth(false);

      });
  },[])

  return (
  auth &&
    <div >
      
       <Navbar count={1} auth={auth}/>
       <div className='heading'>
       <h1>WHAT YOU WANT TO LOOK FOR ... ?</h1>
       </div>
       <div className="cards">
        <Link to="/Canteens">
        <div className='card'>
            <h2 className='text'>Canteens</h2>
            <img  src={require("../assets/canteen.jpeg")} alt="404" classname='img'/>
        </div>
        </Link>
        <Link to="/Juice-centres">
        <div className='card'>
            <h2 className='text'>Juice Centres</h2>
            <img  src={require("../assets/juice.webp")} alt="404" classname='img'/>
        </div>
        </Link>
        <Link to="/Stationaries">
        <div className='card'>
            <h2 className='text'>Stationaries</h2>
            <img  src={require("../assets/stationary2.jpeg")} alt="404" classname='img'/>
        </div>
        </Link>
       </div>
      
       <Footer/>
    </div>
  )
}
