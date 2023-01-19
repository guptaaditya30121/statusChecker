import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import '../pages/home.css';
export default function Home() {
  return (
    <div >
       <Navbar count={1}/>
       <div className='content'>
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
