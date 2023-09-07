import React, { useRef } from 'react';
import Page from "./Components/Page"
import Logo from "../Assets/images/playbuttonicon.png" 
import SearchIcon from "../Assets/images/searchicon.png" 
import AccountIcon from "../Assets/images/accounticon.png" 
import Star from "../Assets/images/starimage.png" 
import Movie from "./Components/Movie"
import { useParams } from 'react-router-dom';


export default function Main() {
  const[allMovies, setAllMovies] = React.useState([])
  const[popularMovies, setPopular] = React.useState([])
  const[allGenres, setGenres] = React.useState([])
  const[query,setQuery] = React.useState("")
  const[message,setMessage] = React.useState(false)
  const [selectedGenre, setSelectedGenre] = React.useState(null);

  const mainMovieRef = useRef(null);
  const {page} = useParams()

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results.length === 0) {
          console.log("No movies found for the given query.");
        } else {
          setAllMovies(response.results);
        }
      })
      .catch(err => console.error(err));
   }, [page]);

  React.useEffect(() => {
   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
    }
  };

  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => setGenres(response.genres))
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
  const first10 = allMovies.slice(0,10)
  const allMoviesArray = first10.map(movie => {
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
    />
    )
  })

  const moviesArray = popularMovies.map(movie => {
    return (
      <Movie 
        key = {movie.id}
        id = {movie.id}
        name = {movie.original_title}
        date = {movie.release_date}
        image = {movie.poster_path}
        star = {Star}
        rating = {movie.vote_average}
        genres = {movie.genre_ids}
        type = {movie.media_type}
      />
    ) 
  })

  const genresArray = allGenres.map((genre) => {
    return (
      <p
        key={genre.id}
        onClick={() => handleGenreFilter(genre.id)}
      >
        {genre.name}
      </p>
    );
  });

  function handleChange(e) {
    e.preventDefault()
    setQuery(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
        }
      };
        
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
          .then(response => response.json())
          .then(response => {
            if (response.results.length === 0) {
              setMessage(true);
              setAllMovies(response.results);
            } else {
              setMessage(false);
              setAllMovies(response.results);
            }
            mainMovieRef.current.scrollIntoView({ behavior: 'smooth' });
          })
          .catch(err => console.error(err));

    }catch(e) {
      console.log(e)
    }
  }

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

  function handleGenreFilter(genre) {
    setSelectedGenre(genre)
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=${genre}&page=${page}`, options)
      .then(response => response.json())
      .then(response => setAllMovies(response.results))
      .catch(err => console.error(err));

  }
  
  function handleYearFilter(year) {   
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=${year}`, options)
      .then(response => response.json())
      .then(response => setAllMovies(response.results))
      .catch(err => console.error(err));

  }

const yearsArray = [2023, 2022, 2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2000,1990,1980,1970].map((year) => {
  return (
    <p
      key={year}
      onClick={() => handleYearFilter(year)}
    >
      {year}
    </p>
  );
});

function handleTypeFilter(tp) {
  var url = ""
  if(tp === "Popular") {
    url =  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
  }else if (tp === "Trending") {
    url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`
  }else if (tp === "Top Rated") {
    url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`
  }else if (tp === "Upcoming") {
    url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`
  }else{
    url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`
  }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZkNzcyZTA2NzExZDQwMzhkMWEyNDkxYzRhMWFmNSIsInN1YiI6IjY0Zjc2NDA5YThiMmNhMDBlMTU4ODk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yrUE61r8ZMOUB43DZZhc8XZh89-aCelZG5a5LvG_OIQ'
    }
  };
  
  fetch(url, options)
      .then(response => response.json())
      .then(response => setAllMovies(response.results))
      .catch(err => console.error(err));
}

const movietp = ["Trending","Popular","Top Rated","Upcoming","TV-Shows"].map((tp,i) => {
  return (
    <p
      key={i}
      onClick={() => handleTypeFilter(tp)}
    >
      {tp}
    </p>
  );
});

    return (
      <div className="Main--Container">
        <div className='Main--Header'>
        <a href="/Main/1">
          <div className='Header--Left'>
            <img src={Logo} />
            <p>CINESCAPE</p>
          </div>
        </a>
          <div className='Header--Middle'>
            <div className='search--input'>
              <form onSubmit={handleSubmit}>
                  <input 
                  placeholder='Search...'
                  type='text'
                  name="search"
                  value={query}
                  required
                  onChange={handleChange}
                  />
                </form>
                  <img src={SearchIcon} onClick={handleSubmit}/>
            </div>
          </div>
          <div className='Header--Right'>
          <img src={AccountIcon}/>
          </div>
        </div>
        <div className='Main--Elements'>
          <div>
          <div className='Left--Element'>
            <p style={{marginLeft:"40px",marginTop:"40px",opacity:"1",cursor:"default"}}>All</p>
            {movietp}
            <p style={{marginLeft:"40px",opacity:"1",cursor:"default"}}>Genre</p>
            {genresArray}
            <p style={{marginLeft:"40px",opacity:"1",cursor:"default"}}>Year</p>
            {yearsArray}
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
            <p ref={mainMovieRef}>{selectedGenre ? `${genreMap[selectedGenre]}  Movies` : "All Movies"}</p>
            <div className='Main--Movies'>
             {message && <p style={{marginTop:"50px",marginLeft:"500px"}}>No movies found</p> }
              {allMoviesArray}
            </div>
            </div>
          </div>
        </div>
        <div className='Page--Number'>
          <Page 
            number = "<"
          />
          <Page 
            number = {1}
          />
          <Page 
            number = {2}
          />
          <Page 
            number = {3}
          />
          <Page 
            number = {4}
          />
           <Page 
            number = {5}
          />
          <Page 
            number = ">"
          />
          <Page 
            number = ">>"
          />
        </div>
      </div>
    );
  }
  