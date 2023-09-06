import React from 'react';

export default function Movie(props) {
  const rating = parseFloat(props.rating).toFixed(1);
  console.log(props.genres)
  const styles = {
    marginLeft:"15px",
    marginBottom: (props.name || props.namebackup).length > 18 ? "10px" : "-20px",
    height:"60px",
    width:"150px",
    textOverflow:"ellipsis",
    overflow : "hidden"
  }
    return (
        <div className='Popular--Movie'>
          <div className='Popular--Image'>
            <img src={`https://image.tmdb.org/t/p/w500${props.image || "/static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}`} />
          </div>
          <div className='Image--Hover' style={{visibility:"visible"}}>
            <img src={props.star} />
            <p style={{marginLeft:" 70px"}}>{rating}/10</p>
            <p>Adventure</p>
          </div>
        <div className='Movie--infos'>
          <br/>
            <p style={styles}>{props.name || props.namebackup}</p>
            <div className='Movie-date-year'>
            <p style={{color:"#DC4C4C",marginLeft:"15px"}}>Movie  • </p>
            <p style={{marginLeft:"15px"}}>{props.date || props.datebackup}</p>
          </div>
        </div>
      </div>
    )
}
