import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Login(props) {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmation: '',
  });
  const [message, setMessage] = useState('');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^.{8,}$/;

  function handleChange(e) {
    const { value, name } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setMessage('Invalid email address');
      } else {
        setMessage('');
      }
    } else if (name === 'password' || name === 'confirmation') {
      if (!passwordRegex.test(value)) {
        setMessage('Password must be at least 8 characters long.');
      } else if (name === 'confirmation' && value !== data.password) {
        setMessage('Passwords do not match!');
      } else {
        setMessage('');
      }
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (data.password === data.confirmation && emailRegex.test(data.email) && passwordRegex.test(data.password)) {
      axios
        .post('http://localhost/api/add.php', data)
        .then(response => {
          if (response.data.status === 'success') {
            Swal.fire({
              title: 'Registration Successfully',
              html: 'Proceed to login',
              icon: 'success',
            });
            props.setActive(true);
          } else if (response.data.status === 'error') {
            Swal.fire({
              title: 'Failed to register',
              html: 'Email already registered',
              icon: 'error',
            });
          }
        })
        .catch((error) => {
          console.error('Error Registering:', error);
        });
    } else {
      setMessage('Please fix the validation errors before submitting.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Login">
        <div className='Login--Titles'>
          <h1 style={{ color: '#FFF', opacity: '0.5' }} onClick={() => {
            props.setActive(true);
          }}>Login</h1>
          <hr />
          <h1 style={{ color: '#FFF' }}>Register</h1>
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
            <img src={props.passwordicon} alt="Email icon" />
          </div><br />
          <div className='pass--input'>
            <input
              placeholder='Password'
              type='Password'
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <img src={props.emailicon} alt="Password icon" />
          </div><br />
          <div className='pass--input'>
            <input
              placeholder='Confirm Password'
              type='Password'
              name="confirmation"
              value={data.confirmation}
              onChange={handleChange}
              required
            />
            <img src={props.emailicon} alt="Confirm Password icon" style={{ top: '66.2%' }} />
          </div>
          {message && <p style={{ fontSize: '14px', margin: '0', marginTop: '15px', marginLeft: '60px', marginBottom: '-30px', color: 'red' ,fontSize:"14px",width:"355px"}}>{message}</p>}
          <button>Register</button>
        </div>
        <div className="forgot">
          <p>Forgot Password?</p>
        </div>
      </div>
    </form>
  );
}
