import React, { useState } from 'react'
import '../styles/AccountProfile.css'

const base_url = "http://image.tmdb.org/t/p/original/"


function PersonFaveMovie({ poster_path, backdrop_path, name, overview, release_date, vote_average, vote_count, deleteMovie }) {
  const [hover, setHover] = useState(false)
  const [viewDetails, setViewDetails] = useState(true)
       
  function handleMovieClick() {
    console.log(name)
    setViewDetails(!viewDetails)
  }

  // delets movie from users my faves list
  function handleDelete() {
    fetch(`/deletepersonfave/${name}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          deleteMovie(name)
        } else {
          res.json().then(name => console.log("Did not delete"))
        }
      })
  }

  function toggleClose() {
    setViewDetails(!viewDetails)
  }

  return (
    <div className="my-fave-movie" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
      {hover && <div className="delete-button" onClick={handleDelete}>ⓧ</div>}
      <img className='faves-row-poster' src={`${base_url}${poster_path}`} alt={name} onClick={handleMovieClick} />
      {viewDetails ? null : 
       <div className='modal'>
         <div className='modal-content' onClick={e => e.stopPropagation()}>
           <p className='modal-button' onClick={toggleClose}>ⓧ</p>
          <div>
             <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={name} className='modal-image' />
            <div className='modal-fade-bottom'></div>
           </div>
           <div className='modal-header'>
            <h3 className='modal-title'>{name}</h3>
           </div>
           <div className='modal-details'>
             <p className='modal-rating'><strong>Popularity:</strong> <em>{vote_average}</em></p>
             <p className='modal-votes'><strong>Comminity Votes:</strong> <em>{vote_count}</em></p>
             <p className='modal-date'><strong>Release Date:</strong> <em>{release_date}</em></p>
           </div>
           <div className='modal-body'>
            <p className='overview'>{overview}</p>
           </div>
         </div>
       </div>}
    </div>
  )
}

export default PersonFaveMovie