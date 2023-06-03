import React, { useState  } from 'react';
import Navbar from '../components/Navbar';
import { Link , useNavigate } from 'react-router-dom';
import '../pages/signin.css';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Home from './Home';
const API_BASE = "http://localhost:3002";
const BACKEND_API = "http://localhost:3002";
export default function SignIn({auth=0}) {
  const [username ,setUsername] = useState("");
  const [password ,setPassword] = useState("");
  const navigate = useNavigate();
  // const handleclick = () =>{
  //   console.log("hello");
  //   fetch(API_BASE + "/auth/google",{
  //       method: 'GET',
  //       // headers: {
  //       //     'Accept' : 'application/json',
  //       // }
  //   })
  //  }  //not working bcoz of cors origin error
  const handleclick2 = ()=>{
    navigate('/Status-updates')
  }
  return (
    <>
        {auth && <Home/>}
        <br/>
        <br/>
        {/* <br/>
        <br/>
        <h1 className='headng'>Status-Checker</h1>
       <h1 className='heading1'>Continue as a Student</h1>
       <div class="google-btn">
        <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <a class="btn-text" href={`${BACKEND_API}/auth/google`} ><b>Sign in with google</b></a>
        </div>
       <h1 className='heading1'>Continue as a shop owner</h1>
       {/* <button className='btndec'>Click Me</button> */}
        
   { !auth &&    <MDBContainer fluid className="p-3 my-5">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    


   

    <MDBBtn className="mb-4 w-100" size="lg" onClick={handleclick2}>I am a Shop Owner</MDBBtn>

    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">OR</p>
    </div>
    <h1 >Sign-In for Students</h1>
    <br />
    {/* <button onClick={handleclick} >
    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}} >
    
      <MDBIcon fab icon="facebook-f" className="mx-2" />
      Continue with Google
    </MDBBtn>
    </button> */}
   <div class="google-btn">
        <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <a class="btn-text" href={`${BACKEND_API}/auth/google`} ><b>Sign in with google</b></a>
        </div>
    

  </MDBCol>

</MDBRow>

</MDBContainer>}
    </>
  )
}
 