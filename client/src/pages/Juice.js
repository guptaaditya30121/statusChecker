import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../pages/canteen.css'
import { useState , useEffect } from 'react';
const API_BASE = "http://localhost:3002";

export default function Juice(props) {
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
    const activeJuice = shops.filter(shop =>
        shop.category === 2 && shop.status === true
        );
    const closedJuice = shops.filter(shop =>
        shop.category === 2 && shop.status === false
        );
    return (
        <>
       
        <div >
            <Navbar count={3} auth={props.auth} />
            <div className="content1">
                <h1>ACTIVE JUICE CENTRES...({activeJuice.length})</h1>
            </div>
            <div className="cards1">
                {activeJuice.map(shop =>(
                    <div className='card1'>
                    <h2 className='ab'>{shop.name}</h2>
                    <img src={require(`../assets/${shop.name.toLowerCase()}.jpeg`)} alt="404" classname='img' />
                    </div>
                ))}

            </div>
            <div className="content1">
                <h1>JUICE CENTRES CLOSED...({closedJuice.length})</h1>
            </div>
            <div className="cards12">
                {closedJuice.map(shop =>(
                    <div className='card1' >
                    <h2 className='ab'>{shop.name}</h2>
                    <img src={require(`../assets/${shop.name.toLowerCase()}.jpeg`)} alt="404" classname='img' />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
        
        </>
    )
}
