// client/src/components/VideoDetails.js
import React, { useState } from 'react'
import '../styles/VideoPlay.css'


function VideoPlay({ movie, setPlayVideo, playVideo }) {
  const [showMessage, setShowMessage] = useState(false)

  // closes VideoPlay modal
  function toggleClose() {
    setPlayVideo(!playVideo)
  }

  // shows error message
  function handleClick() {
    setShowMessage(!showMessage)
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
          <h3 className='modal-title'>{movie.name || movie.title || movie.original_name}<span></span></h3>
        </div>
        <div className='modal-details'>
          <button className='modal-play-button' onClick={handleClick}>▶ Play</button>
          {showMessage ? <p className='video-err-message'><em>Video Unavailable at this time</em></p> : null}
        </div>
        <div className='modal-body'>
        </div>
      </div>
    </div>
  )
}

export default VideoPlay