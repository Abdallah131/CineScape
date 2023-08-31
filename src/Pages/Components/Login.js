import React from 'react';
import {useState} from 'react';

export default function Login(props) {
    const[data,setData] = useState({
        email : "",
        password : "",
        remember : false
    })

    function handleChange(e) {
        const{value,type,name,checked} = e.target
        setData(prevData => {
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value
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
                <h1 style={{color:"#FFF"}}>Login</h1>
                <hr/>
                <h1 style={{color:"#FFF",opacity:"0.5"}} onClick={() => {
                    props.setActive(false)
                }}>Register</h1>
            </div>
            <p>Join the cinematic journey.</p>
            <div className='Login--Inputs'>
            <div className='email--input'>
                <input 
                placeholder='Email Address'
                type='email'
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
                type="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                />
                <img src={props.emailicon} />
            </div>
            <div className='Remember--Me'>
                <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value={data.remember}
                    onChange={handleChange}
                    />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button>Login</button>
            </div>
            <div className="forgot">
                <p>Forgot Passowrd?</p>
            </div>
        </div>
    </form>
)
}