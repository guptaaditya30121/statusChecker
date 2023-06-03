import React, { useState } from 'react'
import { useEffect } from 'react';
import { Await, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/register.css'
const API_BASE = "http://localhost:3002";
export default function Register({check=0}) {
  
  const [fname , setfname] = useState("");
  const [type , setType] = useState(0);
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");
  const [phone , setContactNo] = useState("");
  const navigate = useNavigate();
  const post = (e) =>{
    e.preventDefault();
    if(fname==="")
    {
        toast.error('Name field Required', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        return;
        //alert("Name field Required");
    }
    if(type===0)
    {
        toast.error('Type field is required', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        return;
    }
    if(username==="")
    {
        toast.error('Username field Required', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        return;
    }
    if(password==="")
    {
        toast.error('Password field Required', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        return;
    }
    
    fetch(API_BASE + "/shops/send-mail",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({fname,type,username,email,password,phone})
      }
  )
  .then((response) => response.json())
  .then( (data) => {
   toast.success('Email has been sent sucessfully', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }); 
      // setfname(""); 
      // setType(0);
      // setUsername("");
      // setPassword("");
      // setContactNo("");
      setTimeout(()=>{alert('/')},5000); 
      //navigate('/');
      
   })
   .catch((err) => {
    toast.error('Try Again! Some Error', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
   });
  }
  
  return (
    <div>
      

      <Navbar count={6}/>
      
      <div className='heading'>
        <h1>Wanna Register with us? Fill this form.</h1>
      </div>
      <div className='forms'>
      <form>
        <label for="fname" className='tx'>Shop's Name &nbsp;:</label>
        <input type="text" id="fname" name="fname" className='tx1' value={fname} onChange={(e)=>{setfname(e.target.value)}}/><br/>
        <label htmlFor="type" className='tx'>Select Type&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;</label>
        <select name="type" id="type" className='select' value={type} onChange={(e)=>{setType(e.target.value);}} >
            <option value={0} className='tx1'>-</option>
            <option value={1} className='tx1'>Canteen</option>
            <option value={2} className='tx1'>Juice Centre</option>
            <option value={3} className='tx1'>Stationaries</option>
        </select>
        <br/>
        <label for="username" className='tx' >Set Username: </label>
        <input type="text" id="username" name="username" className='tx1' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/><br/>
        <label for="username" className='tx' >Set Email: </label>
        <input type="text" id="email" name="email" className='tx1' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
        <label for="password" className='tx' >Set Password : </label>
        <input type="password" id="password" name="password" className='tx1' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <label for="contact" className='tx' >Contact No. &nbsp;&nbsp;: </label>
        <input type="string" id="phone" name="phone" className='tx1' value={phone} onChange={(e)=>{setContactNo(e.target.value)}}/><br/><br/>
        <br/><br/><br/>
                        <button className='butt' onClick={post} >Submit</button>
                        <button type="reset" className='butt'>Reset</button>
    </form>
    </div>
    
    </div>
   

  )
}

