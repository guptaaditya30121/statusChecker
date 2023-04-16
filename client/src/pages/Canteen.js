import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../pages/canteen.css'
import { useState , useEffect } from 'react';
const API_BASE = "http://localhost:3002";

export default function Canteen() {
    const [shops , setShops] = useState([]);
    useEffect(()=>{
        GetShops()
        
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
        .then(()=>{console.log(shops)})
    }
    const activeCanteens = shops.filter(shop =>
        shop.category === 1 && shop.status === true
        );
    const closedCanteens = shops.filter(shop =>
        shop.category === 1 && shop.status === false
        );
    return (
        <div >
            <Navbar count={2} />
            <div className="content1">
                <h1>ACTIVE CANTEENS...({activeCanteens.length})</h1>
            </div>
            <div className="cards1">
                {activeCanteens.map(shop =>(
                    <div className='card1'>
                    <h2 className='ab'>{shop.name}</h2>
                    <img src={require(`../assets/${shop.name.toLowerCase()}.jpeg`)} alt="404" className='img' />
                    </div>
                ))}

            </div>
            <div className="content1">
                <h1>CANTEENS CLOSED...({closedCanteens.length})</h1>
            </div>
            <div className="cards12">
                {closedCanteens.map(shop =>(
                    <div className='card1' >
                    <h2 className='ab'>{shop.name}</h2>
                    <img src={require(`../assets/${shop.name.toLowerCase()}.jpeg`)} alt="404" classname='img' />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
