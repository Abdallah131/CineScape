import React from 'react';
import {useParams} from "react-router-dom";

export default function MovieInfos() {
    const[allMovies, setAllMovies] = React.useState([])
    const[popularMovies, setPopular] = React.useState([])

    const {id} = useParams()
    const movieId = parseInt(id, 10);
    
    React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
          }
        };
        
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
          .then(response => response.json())
          .then(response => setAllMovies(response.results))
          .catch(err => console.error(err));
       }, []);
       
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
          .then(response => setPopular(response.results))
          .catch(err => console.error(err));
      }, []);

       const movie = allMovies.find(movie => movie.id === movieId) || popularMovies.find(movie => movie.id === movieId);

    return (
    <div className='Movie--Details'>
        {movie && <h1>{movie.original_title || movie.name}</h1>}
        <hr/>
        {movie && <h1>{movie.overview}</h1>}
    </div>
    )
}
