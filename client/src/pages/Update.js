import React from 'react'
import { useState,useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./update.css"
const API_BASE = "http://localhost:3002";
export default function Update() {
    const [shops , setShops] = useState([]);
    const [name , setName ] = useState("-");
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [type , setType] = useState(0);
    const [currStatus , setCurrStatus] = useState(0);
    const navigate = useNavigate();
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
        .then(data=>{setShops(data)})
        
    }
    // const handleSubmit = async(e)=>{
    //     e.preventDefault();
          
    // }

    const checkStatus = () =>{
        console.log(shops)
        console.log(type);
        
        
        var activeCanteens = shops.filter(shop =>
            shop.name.toLowerCase() === name && shop.category == type
            );
        console.log(activeCanteens)
        console.log(activeCanteens[0])
        if(activeCanteens[0].status == true)
        setCurrStatus(1);
        else
        setCurrStatus(2);

    }
    const revert = (e) =>{
        e.preventDefault();
        //console.log(e);
        var activeCanteens = shops.filter(shop =>
            shop.name.toLowerCase() === name && shop.category == type 
            );
        var id = activeCanteens[0]._id;
        //console.log(id);
        if(activeCanteens[0].username === username)
        {
            fetch(API_BASE + "/shops/change/"+id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({username,password})
        
            }).then(response => {
            if(response.status === 200)  
            {toast.success('Status Changed', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                }); 
                navigate('/');
            }
            else toast.error('Wrong Password', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        //    console.log(response);
           
          })
          .catch(error => {
            console.log('API failure' + error);
          });
        }
        else
        {
            toast.error('Wrong Username', {
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
    }
    return (
        <div>
            <Navbar count={5} />
            <div className='main-item'>
                <img src={require("../assets/iitgupdates.jpeg")} alt="image not found" />
                <div className='form'>
                    <h1><em>Enter Your Credentials</em></h1>
                    <br/>
                    <form>
                        <label htmlFor="hostel" className='tx'>Select Hostel&nbsp;:&nbsp;</label>
                        <select name="hostel" id="hostel" className='select' value={name} onChange={(e)=>{setName(e.target.value);   }}>
                            <option value="-">-</option>
                            <option value="manas">Manas</option>
                            <option value="dihing">Dihing</option>
                            <option value="disang">Disang</option>
                            <option value="lohit">Lohit</option>
                            <option value="brahma">Brahma</option>
                            <option value="dhansiri">Dhansiri</option>
                            <option value="shubhansiri">Shubhansiri</option>
                            <option value="umiam">Umiam</option>
                            <option value="barak">Barak</option>
                            <option value="kameng">Kameng</option>
                            <option value="kapili">Kapili</option>
                            <option value="siang">Siang</option>
                        </select>
                        <br/>
                        <label htmlFor="type" className='tx'>Select Type&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                        <select name="type" id="type" className='select' value={type} onChange={(e)=>{setType(e.target.value); }}>
                            <option value={0}>-</option>
                            <option value={1}>Canteen</option>
                            <option value={2}>Juice Centre</option>
                            <option value={3}>Stationaries</option>
                        </select>
                        <br/>
                       
                        <div className='buu'><h3 onClick={checkStatus}>Check Status</h3>
                        {currStatus===0 && <div className='cc'><div className='circle0'></div> <h2>click for status</h2></div>}
                        {currStatus===1 && <div className='cc'><div className='circle1'></div> <h2>open</h2></div>}
                        {currStatus===2 && <div className='cc'><div className='circle2'></div> <h2>close</h2></div>}
                        </div>
                        
                        
                        <label htmlFor="username" className='tx' >Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;</label>
                        <input type="text" id="username" name="username" className='select1' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br />
                        <label htmlFor="pwd" className='tx'>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;</label>
                        <input type="password" id="pwd" name="pwd" className='select1' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <br/>
                        
                        <br/><br/><br/>
                        <button className='butt' onClick={revert} >Submit</button>
                        <button type="reset" className='butt'>Reset</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
