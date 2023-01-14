// client/src/components/Banner.js
import React, { useState, useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import VideoDetails from './VideoDetails'
import VideoPlay from './VideoPlay'
import '../styles/Banner.css'


function Banner({ user }) {
  const [movie, setMovie] = useState([])
  const [viewDetails, setViewDetails] = useState(true)
  const [playVideo, setPlayVideo] = useState(true)
  // const [show, setShow] = useState(false)
  // const [trailerURL, setTrailerURL] = useState('')


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrendingNow)
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ])
    }
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  // console.log(movie)

  function toggleViewDetails() {
    setViewDetails(!viewDetails)
  }

  function togglePlayVideo() {
    setPlayVideo(!playVideo)
  }

  return (
    <header className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center top',
      }}>

      <div className='banner-contents'>
        {viewDetails ? null : <VideoDetails movie={movie} setViewDetails={setViewDetails} user={user}/>}
        {playVideo ? null : <VideoPlay movie={movie} setPlayVideo={setPlayVideo} />}
        <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner-buttons'>
          <button className='banner-button' onClick={togglePlayVideo} >Play</button>
          <button className='banner-button' onClick={toggleViewDetails}>ⓘ More Info</button>

        </div>
        <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fade-bottom" />
    </header>
  )
}

export default Banner