import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../pages/canteen.css'
import { useState , useEffect } from 'react';
const API_BASE = "http://localhost:3001";

export default function Stationary() {
    const [shops , setShops] = useState([]);
    useEffect(()=>{
        GetShops()
        console.log(shops)
    },[]);

    const GetShops = () =>{
        fetch(API_BASE + "/shops",{
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
            }
        })
        .then(res=>res.json())
        .then(data=>setShops(data))
    }
    const activeStationary = shops.filter(shop =>
        shop.category === 3 && shop.status === true
        );
    const closedStationary = shops.filter(shop =>
        shop.category === 3 && shop.status === false
        );
    return (
        <div >
            <Navbar count={4} />
            <div className="content1">
                <h1>ACTIVE STATIONARIES...({activeStationary.length})</h1>
            </div>
            <div className="cards1">
                {activeStationary.map(shop =>(
                    <div className='card1'>
                    <h2 className='ab'>{shop.hostel}</h2>
                    <img src={require(`../assets/${shop.hostel.toLowerCase()}.jpeg`)} alt="404" classname='img' />
                    </div>
                ))}

            </div>
            <div className="content1">
                <h1>STATIONARIES CLOSED...({closedStationary.length})</h1>
            </div>
            <div className="cards12">
                {closedStationary.map(shop =>(
                    <div className='card1' >
                    <h2 className='ab'>{shop.hostel}</h2>
                    <img src={require(`../assets/${shop.hostel.toLowerCase()}.jpeg`)} alt="404" classname='img' />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
