import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
  const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
    10759: 'Action & Adventure',
    10765: 'Sci-Fi & Fantasy'
  };
  const rating = parseFloat(props.rating).toFixed(1);
  const genres = props.genres.slice(0, 3).map(genreId => genreMap[genreId]);
  const genresArray = genres.map(genre => (
    <p style={{ fontSize: "22px"}} key={genre}>
      {genre}
    </p>
  ));
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
          <Link to={`Movie/${props.id}`}>
          <div className='Popular--Image'>
            <img src={`https://image.tmdb.org/t/p/w500${props.image || "/static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}`} />
          </div>
          <div className='Image--Hover' style={{visibility:"visible"}}>
            <img src={props.star} />
            <p style={{marginTop:"-20px"}}>{rating} / 10</p>
            {genresArray}
          </div>
            <div className='Movie--infos'>
              <br/>
                <p style={styles}>{props.name || props.namebackup}</p>
                <div className='Movie-date-year'>
                <p style={{color:"#DC4C4C",marginLeft:"15px"}}>{props.type === "tv" ? "TV" : "Movie"}  • </p>
                <p style={{marginLeft:"15px"}}>{props.date || props.datebackup}</p>
              </div>
            </div>
          </Link>
      </div>
    )
}
