// client/src/components/VideoDetails.js
import React from 'react'
import '../styles/VideoPlay.css'

function VideoPlay({ movie, setPlayVideo, playVideo }) {

  function toggleClose() {
    setPlayVideo(!playVideo)
  }

  return (
    <div className='modal'>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <p className='modal-button' onClick={toggleClose}>ⓧ</p>
        <div>
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.name} className='modal-image' />
          <div className='modal-fade-bottom'></div>
        </div>
        <div className='modal-header'>
        </div>
        <div className='modal-details'>
          <button className='modal-play-button'>▶ Play</button>
          <h3 className='modal-title'>{movie.name}<span></span></h3>
        </div>
        <div className='modal-body'>
        </div>
      </div>
    </div>
  )
}

export default VideoPlay