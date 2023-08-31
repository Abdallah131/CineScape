import React from 'react';
import Superman from '../Assets/images/superman.jpg'
import facebook from '../Assets/images/facebookicon.png'
import instagram from '../Assets/images/instaicon.png'
import linkedin from '../Assets/images/linkedicon.png'
import Login from '../Pages/Components/Login'
import Register from '../Pages/Components/Register'
import emailicon from '../Assets/images/passwordlogo.png'
import passwordicon from '../Assets/images/emaillogo.png'
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
  