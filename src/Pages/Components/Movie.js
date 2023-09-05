import React from 'react';
import {useState} from "react"

export default function Movie(props) {
    return (
        <div className='Popular--Movie'>
            <img src={props.image || "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"} />
        <div className='Movie--infos'>
          <br/>
            <p style={{marginLeft:"15px",marginBottom:"10px",width:"150px",overflow:"hidden"}}>{props.name}</p>
            <div className='Movie-date-year'>
            <p style={{color:"#DC4C4C",marginLeft:"15px"}}>Movie  • </p>
            <p style={{marginLeft:"15px"}}>{props.date}</p>
          </div>
        </div>
      </div>
    )
}