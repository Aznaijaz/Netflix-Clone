import React, { useState , useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


/*const base_url ="https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl }){
    const [movies, setMovies]=useState([]);
    
    useEffect(()=>{
        async function fetchData (){
            const request= await axios.get(fetchUrl);
           setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.table(movies);
    
    
    return (
        <div className="row">
            <h2>{title}</h2>
    <div className="row__posters">
    {/*row poster }
    {movies.map(movie =>(
  <img
  key={movie.id}
  className="row__poster"
   src={`${base_url}${movie.poster_path}`} alt={movie.name}/>))}
    </div> 
    </div>
) 
}
export default Row*/

const base_url = "https://image.tmdb.org/t/p/original/" ;

function Row({title , fetchURL , isLargeRow}) {

    const [movies , setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
      height : "390",
      width : "100%",
      playerVars : {

        autoplay : 1
      },
    }

    const handleClick = (movie)=>{
      if(trailerUrl){
        setTrailerUrl('');
      } else {
        movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"));
        }).catch(error => console)
      }
    }

    // console.log(movies);

  return (
    <div className='row'>

      <h2>{title}</h2>
      
      <div className="row__posters">
        {movies.map(movie => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
            key={movie.id} 
            onClick={()=> handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}
          />
        ))}
      </div>
       { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
    </div>
  )
}

export default Row

