import React from 'react';
import { useEffect } from 'react';
import Logo from "../Assets/images/playbuttonicon.png" 
import SearchIcon from "../Assets/images/searchicon.png" 
import AccountIcon from "../Assets/images/accounticon.png" 
import Movie from "./Components/Movie"


export default function Main() {
  const[allMovies, setMovies] = React.useState([])

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  const moviesArray = allMovies.map(movie => {
    return (
      <Movie 
        key = {movie.id}
        name = {movie.original_title}
        date = {movie.release_date}
        image = {movie.poster_path}
      />
    ) 
  })

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
          <div>
          <div className='Left--Element'>
            <p style={{marginLeft:"40px",marginTop:"40px",opacity:"1",cursor:"default"}}>All Movies</p>
            <p>Trending</p>
            <p>Popular</p>
            <p>Most Watched</p>
            <p>IMDb</p>
            <p style={{marginLeft:"40px",opacity:"1",cursor:"default"}}>Genre</p>
            <p>Action</p>
            <p>Adult</p>
            <p>Adventure</p>
            <p>Animation</p>
            <p>Biography</p>
            <p>Comedy</p>
            <p>Costume</p>
            <p>Crime</p>
            <p>Documentary</p>
            <p>Drama</p>
            <p>Family</p>
            <p>Fantasy</p>
            <p>Film-Noir</p>
            <p>Game-Show</p>
            <p>History</p>
            <p>Horror</p>
            <p>Music</p>
            <p>Mystery</p>
            <p>Fighting</p>
            <p>Romance</p>
            <p>Sc-Fi</p>
            <p>War</p>
            <p>Thriller</p>
            <p>Reality</p>
            <p style={{marginLeft:"40px",opacity:"1",cursor:"default"}}>Year</p>
            <p>2023</p>
            <p>2022</p>
            <p>2021</p>
            <p>2020</p>
            <p>2019</p>
            <p>2018</p>
            <p>2017</p>
            <p>2016</p>
            <p>2015</p>
            <p>2014</p>
            <p>2012</p>
            <p>2011</p>
            <p>2010</p>
            <p>2009</p>
            <p>2008</p>
            <p>2007</p>
            <p>2006</p>
            <p>2005</p>
            <p>2004</p>
            <p>2003</p>
            <p>2000s</p>
            <p>1990s</p>
            <p>1980s</p>
            <p>1970s</p>
            <p>1960s</p>
            <br/><br/>
          </div>
          <div className='Left--Comments'>
          <p style={{marginLeft:"40px", marginTop:"40px"}}>Latest Comments</p>

          </div>
          </div>
          <div className='Right--Element'>
            <div className='Right--Header'>
              <br/><br/>
              <p>POPULAR MOVIES</p>
              <div className='Popular--Titles'>
                {moviesArray}
              </div>
            </div>
            <div className='Right--Main'>
            <br/><br/>
            <p>NEWEST MOVIES</p>
            <div className='Main--Movies'>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  