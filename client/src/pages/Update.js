import React from 'react'
import { useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./update.css"
export default function Update() {
    const [hostel , setHostel ] = useState('manas');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [type , setType] = useState(1);
    const handleSubmit = ()=>{

    }
    return (
        <div>
            <Navbar count={5} />
            <div className='main-item'>
                <img src={require("../assets/iitgupdates.jpeg")} alt="image not found" />
                <div className='form'>
                    <h1><em>Enter Your Credentials</em></h1>
                    <br/>
                    <form >
                        <label for="hostel" className='tx'>Select Hostel:&nbsp;</label>
                        <select name="hostel" id="hostel" className='select' value={hostel} onChange={(e)=>{setHostel(e.target.value)}}>
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
                        <label for="username" className='tx' >Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;</label>
                        <input type="text" id="username" name="username" className='select1' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br />
                        <label for="pwd" className='tx'>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;</label>
                        <input type="password" id="pwd" name="pwd" className='select1' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <br/>
                        <label className='tx'>Select Type &nbsp;&nbsp; :</label>
                        <input type="radio" id="Canteen" name="type" value="Canteen"/>
                        <label for="Canteen">Canteen</label>
                        <input type="radio" id="Juice-Centre" name="type" value="Juice-Centre"/>
                        <label for="Juice-Centre">Juice-Centre</label>
                        <input type="radio" id="Stationary" name="type" value="Stationary"/>
                        <label for="Stationary">Stationary</label>
                        <br/><br/><br/>
                        <input type="submit" value="Submit" className='butt' onSubmit={handleSubmit}></input>
                        <input type="reset" className='butt'></input>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
