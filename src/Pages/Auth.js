import React from 'react';
import Superman from '../assets/images/superman.jpg'
import facebook from '../assets/images/facebookicon.png'
import instagram from '../assets/images/instaicon.png'
import linkedin from '../assets/images/linkedicon.png'
import Login from '../Pages/Components/Login'
import Register from '../Pages/Components/Register'
import emailicon from '../assets/images/passwordlogo.png'
import passwordicon from '../assets/images/emaillogo.png'
import {useState} from 'react'

export default function Auth() {
    const[active,setActive] = useState(true)

    return (
      <div className="Main">
        <img src={Superman}/>
        <h1 className="Main--Title">CineScape</h1>
        {active && <Login
          emailicon = {emailicon}
          passwordicon = {passwordicon}
          setActive = {setActive}
        />}
        {!active && 
        <Register
          emailicon = {emailicon}
          passwordicon = {passwordicon}
          setActive = {setActive}
      />}
        <div className="Socials">
          <div className='facebook'>
            <img src={facebook} />
          </div>
          <div className='instagram'>
            <img src={instagram} />
          </div>
          <div className='linkedin'>
            <img src={linkedin} />
          </div>
        </div>
      </div>
    );
  }
  