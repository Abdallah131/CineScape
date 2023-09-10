import React from 'react';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Login(props) {
    const[data,setData] = useState({
        email : "",
        password : "",
        remember : false
    })
    const[message,setMessage] = useState("")
    const naviagte = useNavigate()

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
         axios.post("http://localhost/api/auth.php", data)
         .then(response => {
            if (response.data.status === 'success') {
                    naviagte("/Main/1")
            } else if (response.data.status === 'error') {
              Swal.fire({
                title: 'Incorrect Credentials',
                html: 'Verify email and password',
                icon: 'error',
              });
            }
          })
          .catch((error) => {
            console.error('Error :', error);
          });
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
               {message && <p style={{fontSize:"14px", margin:"0",marginTop:"15px",marginLeft:"80px",marginBottom:"-30px",color:"red"}}>{message}</p> }
            <button>Login</button>
            </div>
            <div className="forgot">
                <p>Forgot Passowrd?</p>
            </div>
        </div>
    </form>
)
}