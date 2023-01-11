import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../pages/home.css';
export default function Home() {
  return (
    <div>
       <Navbar count={1}/>
       <div className='content'>
       <h1>WHAT YOU WANT TO LOOK FOR ... ?</h1>
       </div>
       <div className="cards">
        <div className='card'>
            <h2>Canteens</h2>
            <img  src={require("../assets/canteen.jpeg")} alt="404" classname='img'/>
        </div>
        <div className='card'>
            <h2>Juice Centres</h2>
            <img  src={require("../assets/canteen.jpeg")} alt="404" classname='img'/>
        </div>
        <div className='card'>
            <h2>Stationaries</h2>
            <img  src={require("../assets/canteen.jpeg")} alt="404" classname='img'/>
        </div>
       </div>
       <Footer/>
    </div>
  )
}
