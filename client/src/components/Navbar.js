import React from 'react';
import '../components/navbar.css';

export default function Navbar({count = 1}) {
  return (
    <div className='navbar'>
    {count==1 && <div className='navlink2' href=''>Home</div>}
    {count!=1 && <div className='navlink' href=''>Home</div>}
    {count==2 && <div className='navlink2' href=''>Canteens</div>}
    {count!=2 && <div className='navlink' href=''>Canteens</div>}
    {count==3 && <div className='navlink2' href=''>Juice Centres</div>}
    {count!=3 && <div className='navlink' href=''>Juice Centres</div>}
    {count==4 && <div className='navlink2' href=''>Stationary</div>}
    {count!=4 && <div className='navlink' href=''>Stationary</div>}
    {count==5 && <div className='navlink2' href=''>Update Status</div>}
    {count!=5 && <div className='navlink' href=''>Update Status</div>}
    {count==6 && <div className='navlink12' href=''>About me</div>}
    {count!=6 && <div className='navlink1' href=''>About me</div>}
    </div>
  )
}
