import React from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';

export default function Navbar({count = 1, auth }) {
  return (
    <div className='navbar'>
    {count==1 && auth &&<Link to="/" className='navlink2' >Home</Link>}
    {count!=1 && auth &&<Link to="/" className='navlink' >Home</Link>}
    {count==2 && auth &&<Link to="/Canteens" className='navlink2'>Canteens</Link>}
    {count!=2 && auth &&<Link to="/Canteens" className='navlink' >Canteens</Link>}
    {count==3 && auth &&<Link to="/Juice-centres" className='navlink2'>Juice Centres</Link>}
    {count!=3 && auth &&<Link to="/Juice-centres" className='navlink' >Juice Centres</Link>}
    {count==4 && auth &&<Link to="/Stationaries" className='navlink2'>Stationary</Link>}
    {count!=4 && auth &&<Link to="/Stationaries" className='navlink' >Stationary</Link>}
    {count==5 && !auth &&<Link to="/Status-updates" className='navlink2'>Update Status</Link>}
    {count!=5 && !auth &&<Link to="/Status-updates" className='navlink' >Update Status</Link>}
    {!auth &&<Link to="/" className='navlink' >Sign-In</Link>}
    {count==6 && !auth &&<Link to="/Register" className='navlink2'>Register</Link>}
    {count!=6 && !auth &&<Link to="/Register" className='navlink' >Register</Link>}
    {count==7 && auth &&<a href="http://localhost:3002/auth/logout" className='navlink12'>Logout</a>}
    {count!=7 && auth &&<a href="http://localhost:3002/auth/logout" className='navlink1'>Logout</a>}
    </div>
  )
}
