import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/UserProfile.css'


const base_url = "http://image.tmdb.org/t/p/original/"


function PersonFaveMovie({ id, poster_path, name, overview, myFaves, setMyFaves, deleteMovie, setList }) {
  const [ hover, setHover] = useState(false)

  const navigate = useNavigate()

  function handleMovieClick(){
    console.log(name)
  }

  function handleDelete() {
    console.log(name)

    fetch(`/deletepersonfave/${name}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          deleteMovie(name)
          // navigate('/Home')
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

export default PersonFaveMovie