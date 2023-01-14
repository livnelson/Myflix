import React from 'react'
import '../styles/FaveMovie.css'
import '../styles/VideoDetails.css'

const base_url = "http://image.tmdb.org/t/p/original/"

function FaveMovie({ poster_path, name}) {
  return (
    <div className='fave-movie'>
      <img src={`${base_url}${poster_path}`} alt={name} />
    </div>
  )
}

export default FaveMovie