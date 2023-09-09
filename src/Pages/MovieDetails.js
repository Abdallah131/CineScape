import React from 'react';
import {useParams} from "react-router-dom";
import Movie from "./Components/Movie"
import Star from "../Assets/images/starimage.png" 
import Logo from "../Assets/images/playbuttonicon.png" 
import AccountIcon from "../Assets/images/accounticon.png" 
import FireIcon from "../Assets/images/fireicon.png" 

export default function MovieInfos() {
    const[similarMovies, setSimilar] = React.useState([])
    const[sim, setSim] = React.useState([true])
    const[details, setDetails] = React.useState([])
    const[backdrop, setBackdrop] = React.useState("")
    const[poster, setPoster] = React.useState("")
    const[detailsOn, setDetailsOn] = React.useState(false)
    const[director, setDirector] = React.useState([])
    const[cast, setCast] = React.useState([])


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
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, options)
          .then(response => response.json())
          .then(response => setSimilar(response.results))
          .catch(err => console.error(err));
      }, [movieId]);

      const first7 = similarMovies ? similarMovies.slice(0,7) : [];
      const similarMoviesArray = first7.map(movie => {
        return(
          <Movie 
            key = {movie.id}
            id = {movie.id}
            name = {movie.original_title}
            namebackup = {movie.name}
            date = {movie.release_date}
            datebackup = {movie.first_air_date}
            image = {movie.poster_path}
            star = {Star}
            rating = {movie.vote_average}
            genres = {movie.genre_ids}
            type = {movie.media_type}
            count = {movie.vote_count}
            sim = {sim}
        />
        )
      })

      React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
          .then(response => response.json())
          .then(response => setDetails(response))
          .catch(err => console.error(err));
      }, [movieId])

      React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, options)
          .then(response => response.json())
          .then(response => {
            if (response.backdrops[1] && response.posters[0]) {
              setBackdrop(response.backdrops[1].file_path);
              setPoster(response.posters[0].file_path);
            }
          })
          .catch(err => console.error(err));
      }, [movieId])

      const imageUrl = `https://image.tmdb.org/t/p/w500${backdrop}`;
      const posterUrl = `https://image.tmdb.org/t/p/w500${poster}`

      const genreArray = details.genres ? details.genres.map((genre, index) => {
        const isLastGenre = index === details.genres.length - 1;
        return(
          <>
            <p key={genre.id} style={{fontSize:"18px",opacity:"0.85",fontWeight:"400"}}>{genre.name}</p>
            {!isLastGenre && <p style={{marginLeft:"15px",marginRight:"15px",opacity:"0.85",fontWeight:"400"}}>|</p>}
          </>
        );
      }) : [];

      const rating = parseFloat(details.vote_average).toFixed(1);

      const countriesArray = details.production_countries ? details.production_countries.map((country,index) => {
        return(
          <>
                <p key={index} style={{marginLeft:"10px", opacity:"0.85"}}>{country.name},</p>
          </>
        )
      }) : [];

      const genreDetailArray = details.genres ? details.genres.map((genre,index) => {
        return(
          <>
                <p key={index} style={{marginLeft:"10px", opacity:"0.85"}}>{genre.name},</p>
          </>
        )
      }) : [];

      React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
          .then(response => response.json())
          .then((jsonData)=>jsonData.crew.filter(({job})=> job ==='Director'))
          .then(response => setDirector(response[0]))
          .catch(err => console.error(err));
      }, [movieId])

      React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
          .then(response => response.json())
          .then(response => setCast(response.cast))
          .catch(err => console.error(err));
      }, [movieId])

      const cast3 = cast ? cast.slice(0, 3) : [];
      const castArray = cast3 ? cast3.map((actor,index) => {
        return(
          <>
                <p key={index} style={{marginLeft:"10px", opacity:"0.85"}}>{actor.name},</p>
          </>
        )
      }) : [];
      const productionArray = details.production_companies ? details.production_companies.map((company,index) => {
        return(
          <>
                <p key={index} style={{marginLeft:"10px", opacity:"0.85"}}>{company.name},</p>
          </>
        )
      }) : [];
    return (
    <div className='Movie--Details'>
    <div className='Upper--Container'>
      <div className='Upper--Image'>
          <img  src={imageUrl} style={{opacity:"0.4"}}/>
      </div>
        <div className='Upper--Header'>
        <div className='Main--Header' style={{boxShadow:"none",background:"transparent",}}>
        <a href="/Main/1">
          <div className='Header--Left' style={{opacity:"1"}}>
            <img src={Logo} />
            <p>CineScape</p>
          </div>
        </a>
          <div className='Header--Middle'>
          <a href="/Main/1">
            <p style={{fontSize:"20px",marginTop:"8px",fontWeight:"700",marginLeft:"-500px"}}>BROWSE</p>
          </a>
          </div>
          <div className='Header--Right'>
          <img src={AccountIcon}/>
          </div>
        </div>
        </div>
        <div className='Upper--Main'>
          <div className='Main--Image'>
            <img src={posterUrl}/>
          </div>
          <div className='Main--Overview'>
          <p style={{fontSize:"50px"}}>{details.original_title}</p>
          {!detailsOn && <>
            <div style={{display:"flex"}}>
              {genreArray}
            </div>
          <div className='date-age-duration'>
            <p>{details.release_date && details.release_date.slice(0,4)}</p>
            <div className='age--container'>
              <p style={{paddingLeft:"5px",paddingRight:"5px"}}>{details.adult ? "+18" : "+16"}</p>
            </div>
            <p style={{marginLeft:"20px"}}>{details.runtime} minutes</p>
          </div>
          <div className='overviewinfos'>
          <p>{details.overview}</p>
          </div>
          <div className='rating--cont'>
            <div className='rating-circle'>
              <img src={FireIcon} />
            </div>
            <p>{rating} / 10</p>
            <p style={{marginLeft:"20px",fontWeight:"400",fontSize:"18px",marginTop:"2px"}}>({details.vote_count})</p>
          </div>
          </>}
          </div>
          {detailsOn && 
            <div className='details--cont'>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Type : </p>
                <p style={{marginLeft:"10px", opacity:"0.85"}}>Movie</p>
              </div>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Country : </p>
                {countriesArray}
              </div>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Genre : </p>
                {genreDetailArray}
              </div>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Release Date : </p>
                <p style={{marginLeft:"10px", opacity:"0.85"}}>{details.release_date}</p>
              </div>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Director : </p>
                <p style={{marginLeft:"10px", opacity:"0.85"}}>{director.name}</p>
              </div>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Production : </p>
                {productionArray}
              </div>
              <div className='details--element'>
                <p style={{fontWeight:"700"}}>Cast : </p>
                {castArray}
              </div>
            </div>
          }
        <div className='Lower--Main'>
          <div className='Lower--Element'>
            <p onClick={() => setDetailsOn(false)}>OVERVIEW</p>
            <hr style={{ visibility: detailsOn ? 'hidden' : 'visible' }} />
          </div>
          <div className='Lower--Element' style={{marginLeft:"70px"}}>
            <p onClick={() => setDetailsOn(true)}>DETAILS</p>
            <hr style={{ visibility: detailsOn ? 'visible' : 'hidden' }} />
          </div>
        </div>
        </div>
      </div>
      <div className='Lower--Container'>
        <h1>Recommendations</h1>
        <div className='Similar--Container'>
          {similarMoviesArray.length === 0 ? <h1 style={{marginLeft:"760px",marginTop:"0px"}}>Something went wrong!</h1> : similarMoviesArray}
        </div>
      </div>
    </div>
    )
}
