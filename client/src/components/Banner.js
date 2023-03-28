import React, { useState, useEffect } from 'react'
import { movieAxios } from '../instance'
import requests from '../requests'
import VideoDetails from './VideoDetails'
import VideoPlay from './VideoPlay'
import '../styles/Banner.css'


function Banner({ person, addToFave, setAddToFave, setList }) {
  const [movie, setMovie] = useState([])
  const [viewDetails, setViewDetails] = useState(true)
  const [playVideo, setPlayVideo] = useState(true)
  // const [bannerMovies, setBannerMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await movieAxios.get(requests.fetchTrending)
      // console.log(request.data.results)
      // setBannerMovies(request.data.results)
      // const randomIndex = Math.floor(Math.random() * bannerMovies.length)
      // setMovie(bannerMovies[randomIndex])
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ])
    }
    fetchData()
    // setIntercal fetches new movie data every 11s
    const movies = setInterval(fetchData, 11000)
    return () => clearInterval(movies)
  }, [])
  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  // console.log(movie)

  // shows VideoDetails component
  function toggleViewDetails(e) {
    e.stopPropagation(e)
    setViewDetails(!viewDetails)
  }

  // shows VideoPlay component
  function togglePlayVideo(e) {
    e.stopPropagation()
    setPlayVideo(!playVideo)
  }

  return (
    <div>
      <header className='banner'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'center top',
        }}>
        <div className='banner-contents'>
          {viewDetails ? null : <VideoDetails movie={movie} setViewDetails={setViewDetails} person={person} setAddToFave={setAddToFave} addToFave={addToFave} setList={setList} />}
          {playVideo ? null : <VideoPlay movie={movie} setPlayVideo={setPlayVideo} />}
          <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className='banner-buttons'>
            <button className='banner-button' onClick={togglePlayVideo} >Play</button>
            <button className='banner-button' onClick={toggleViewDetails}>ⓘ More Info</button>
          </div>
          <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner-fade-bottom" />
        <br />
      </header>
    </div>
  )
}

export default Banner