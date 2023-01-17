// client/src/components/VideoDetails.js
import React, { useState } from 'react'
import '../styles/VideoPlay.css'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"


function VideoPlay({ movie, setPlayVideo, playVideo }) {
  const [trailerURL, setTrailerURL] = useState('')

  function toggleClose() {
    setPlayVideo(!playVideo)
  }

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
        .catch((error) => console.log(error));
    }
  }

  const options = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <p className='modal-button' onClick={toggleClose}>ⓧ</p>
        <div>
        {trailerURL && <YouTube style={{}} className='youtube-video' videoId={trailerURL} options={options} />}
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.name} className='modal-image' />
          <div className='modal-fade-bottom'></div>
        </div>
        <div className='modal-header'>
        </div>
        <div className='modal-details'>
          <button className='modal-play-button' onClick={handleClick}>▶ Play</button>
          <h3 className='modal-title'>{movie.name}<span></span></h3>
        </div>
        <div className='modal-body'>
        </div>
      </div>
    </div>
  )
}

export default VideoPlay