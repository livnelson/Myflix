// client/src/components/VideoDetails.js
import React, { useState } from 'react'
import '../styles/VideoDetails.css'

function PersonVideoDetails({ movie, person, viewDetails, setViewDetails, setAddToFave, addToFave}) {
  const [like, setLike] = useState(false)
  const [voteCount, setVoteCount] = useState(false)
  const [addToList, setAddToList] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  // const [myFaveList, setMyFaveList] = useState([])


  console.log(person)
  
  function toggleClose() {
    setViewDetails(!viewDetails)
  }

  function handleLikes(e) {
    e.preventDefault();
    setLike(!like)
    console.log("Clicked add to Movie List");
    console.log(movie);

    const likeObj = {
      name: (movie.title || movie.name || movie.original_name),
      poster_path: (movie.poster_path),
      movie_id: (movie.movie_id),
      voteCount: (movie.vote_count += 1),
    }

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(likeObj),
    }

    fetch(`/add_to_movies`, configObject)
      .then((r) => r.json())
      .then((votes) => {
        console.log(votes);
        setVoteCount(votes);
      })
  }

  function handleAddToList(e) {
    e.preventDefault();
    console.log(person.username);

    const movieObj = {
      name: (movie.title || movie.name || movie.original_name),
      poster_path: (movie.poster_path),
      person_id: (person.id),
      movie_id: (movie.movie_id)
    };

    // console.log(movieObj);

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(movieObj),
    };

    fetch("add_to_personlist", configObject)
      .then((r) => r.json())
      .then((list) => {
        console.log(list)
        setAddToList(!addToList)
        setAddToFave(list)
      });
  }

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
        </div>
        <div className='modal-details'>
          <button className='modal-play-button' onClick={handleClick}>▶ Play</button>
          <p onClick={handleLikes} className='modal-likes'>{voteCount ? '♥' : '♡'}</p>
          <p onClick={handleAddToList} className='modal-list'>{addToList ? '✓' : '﹢'}</p>
          <p className='modal-rating'><strong>Popularity:</strong> <em>{movie.vote_average}</em></p>
          <p className='modal-votes'><strong>Comminity Votes:</strong> <em>{movie.vote_count}</em></p>
          <p className='modal-date'><strong>Release Date:</strong> <em>{movie.release_date || movie.first_air_date }</em></p>
        </div>
          {showMessage ? <p className='video-err-message'><em>Video Unavailable at this time</em></p> : null}
        <div className='modal-body'>
          <h3 className='modal-title'>{movie.title || movie.name || movie.original_name}</h3>
          <p className='overview'>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default PersonVideoDetails