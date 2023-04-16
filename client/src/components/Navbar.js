import React from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';

export default function Navbar({count = 1}) {
  return (
    <div className='navbar'>
    {count==1 && <Link to="/" className='navlink2' >Home</Link>}
    {count!=1 && <Link to="/" className='navlink' >Home</Link>}
    {count==2 && <Link to="/Canteens" className='navlink2'>Canteens</Link>}
    {count!=2 && <Link to="/Canteens" className='navlink' >Canteens</Link>}
    {count==3 && <Link to="/Juice-centres" className='navlink2'>Juice Centres</Link>}
    {count!=3 && <Link to="/Juice-centres" className='navlink' >Juice Centres</Link>}
    {count==4 && <Link to="/Stationaries" className='navlink2'>Stationary</Link>}
    {count!=4 && <Link to="/Stationaries" className='navlink' >Stationary</Link>}
    {count==5 && <Link to="/Status-updates" className='navlink2'>Update Status</Link>}
    {count!=5 && <Link to="/Status-updates" className='navlink' >Update Status</Link>}
    {count==6 && <Link to="/Register" className='navlink2'>Register</Link>}
    {count!=6 && <Link to="/Register" className='navlink' >Register</Link>}
    {count==7 && <Link className='navlink12'>About me</Link>}
    {count!=7 && <Link className='navlink1'>About me</Link>}
    </div>
  )
}
