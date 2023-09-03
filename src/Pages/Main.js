import React from 'react';
import Logo from "../Assets/images/playbuttonicon.png" 
import SearchIcon from "../Assets/images/searchicon.png" 
import AccountIcon from "../Assets/images/accounticon.png" 


export default function Login() {
    return (
      <div className="Main--Container">
        <div className='Main--Header'>
          <div className='Header--Left'>
            <img src={Logo} />
            <p>CINESCAPE</p>
          </div>
          <div className='Header--Middle'>
            <div className='search--input'>
                  <input 
                  placeholder='Search...'
                  type='text'
                  name="search"
                  />
                  <img src={SearchIcon}/>
            </div>
          </div>
          <div className='Header--Right'>
          <img src={AccountIcon}/>
          </div>
        </div>

        <div className='Main--Elements'>
          <div className='Left--Element'>

          </div>
          <div className='Right--Element'>
            <div className='Right--Header'>

            </div>
            <div className='Right--Main'></div>
          </div>
        </div>
      </div>
    );
  }
  