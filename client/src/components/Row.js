import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"
import axios from '../axios'
import '../styles/Row.css'

const base_url = "http://image.tmdb.org/t/p/original/"

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([])
  const [trailerURL, setTrailerURL] = useState('')
  const [errors, setErrors] = useState(false)

  // fetch movies to parse into rows based on category/genre
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      // console.log(request)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL]);

  const mappedMovies = movies.map(movie => (
    <img
      key={movie.id}
      onClick={() => handleClick(movie)}
      className={`row-poster`}
      src={`${base_url}${movie.poster_path}`}
      alt={movie.name} />
  ))

  // https://www.npmjs.com/package/react-youtube
  // https://www.npmjs.com/package/movie-trailer
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL('')
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParams" + urlParams);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error)
          setErrors(error)
        });
    }
  }

  function handleErrors() {
    setErrors(!errors)
  }

  // https://developers.google.com/youtube/player_parameters
  const options = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <div className="row">
      <h4 className="row-title">{title}</h4>
      <div className="row-posters">
        {mappedMovies}
      </div>
      <br />
      <div>
        {trailerURL && <YouTube className='youtube-video' videoId={trailerURL} options={options} />}
        {errors ? <div className="errors" onClick={handleErrors}>ⓧ Video unavailable at this time <em>(click to close)</em></div> : null}
      </div>
    </div>
  )
}

export default Row