import React, { useState }from 'react'
import '../styles/UserProfile.css'


const base_url = "http://image.tmdb.org/t/p/original/"


function FaveMovie({ id, poster_path, name, overview, myFaves, setMyFaves, deleteMovie }) {
  const [ hover, setHover] = useState(false)

  function handleMovieClick(){
    console.log(name)
  }

  function handleDelete() {
    console.log(name)

    fetch(`/deletemyfave/${name}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          deleteMovie(name)
        } else {
          res.json().then(data => console.log("Did not delete"))
        }
      })
  }

  return (
    <div className="my-fave-movie" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
      {hover && <div className="delete-button" onClick={handleDelete}>ⓧ</div>}
      <img className='faves-row-poster' src={`${base_url}${poster_path}`} alt={name} onClick={handleMovieClick}/>
    </div>
  )
}

export default FaveMovie