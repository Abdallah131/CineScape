import React from 'react';
import {useState} from "react"

export default function Login(props) {
    const[data,setData] = useState({
        email : "",
        password : "",
        confirmation : ""
    })

    function handleChange(e) {
        const{value,name} = e.target
        setData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    function handleSumbit(e) {
         e.preventDefault()
         console.log(data)

    }
    return(
    <form onSubmit={handleSumbit}>
        <div className="Login">
            <div className='Login--Titles'>
                <h1 style={{color:"#FFF",opacity:"0.5"}} onClick={() => {
                    props.setActive(true)
                }}>Login</h1>
                <hr/>
                <h1 style={{color:"#FFF"}}>Register</h1>
            </div>
            <p>Join the cinematic journey.</p>
            <div className='Login--Inputs'>
            <div className='email--input'>
                <input 
                placeholder='Email Address'
                type='Email'
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                />
                <img src={props.passwordicon}/>
            </div><br/>
            <div className='pass--input'>
                <input 
                placeholder='Password'
                type='Password'
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                />
                <img src={props.emailicon} />
            </div><br/>
            <div className='pass--input'>
                <input 
                placeholder='Confirm Password'
                type='Password'
                name="confirmation"
                value={data.confirmation}
                onChange={handleChange}
                required
                />
                <img src={props.emailicon} style={{top:"66.2%"}}/>
            </div>
            <button>Register</button>
            </div>
            <div className="forgot">
                <p>Forgot Passowrd?</p>
            </div>
        </div>
    </form>
)
}