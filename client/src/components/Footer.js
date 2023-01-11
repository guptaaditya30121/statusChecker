import React from 'react'
import '../components/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <img src={require('../assets/IITG.png')} className='logo'/>
      <div>Developed By Aditya</div>
      <div>Contact me:</div>
      <div>Gmail : guptaaditya30121@gmail.com</div>
      <div>https://github.com/guptaaditya30121</div>
    </div>
  )
}
