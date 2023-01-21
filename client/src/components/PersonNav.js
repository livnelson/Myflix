// client/src/components/Nav.js
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavMenu from './NavMenu'
import Person from './Person'
import '../styles/Nav.css'


function PersonNav({ user, setUser, search, setSearch, setSearchResults, person, setPerson }) {
  const [show, handleShow] = useState(false)
  const [viewMenu, setViewMenu] = useState(true)
  const [searchAPI, setSearchAPI] = useState(false)
  // const [person, setPerson] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        handleShow(true)
      }
      else handleShow(false)
    })
    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, [])

  console.log(user)

  function toggleViewUser() {
    setViewMenu(!viewMenu)
  }

  function handleSearchBar() {
    setSearchAPI(!searchAPI)
  }

  function handleSearch(e) {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=7c552d1090c325ff3ddca4dfe3fd45a9&language=en-US&query=${search}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setSearchResults(res)
        navigate('/SearchResults')
      })
  }

  
  // const mappedPeople = user.people.map((a_user) => {
  //   return <Person key={a_user.id} id={a_user.id} username={a_user.username} profile_img={a_user.profile_img} person={person} setPerson={setPerson} />
  // })

  return (
    <div className={`nav ${show && 'nav-black'}`} >
      <img
        className='nav-logo'
        src='./myflix-logo.png'
        alt='MYFLIX-LOGO'
      />
      <div>
      </div>
      <span className='nav-contents'>

        {searchAPI ? <><form className='search-form' onSubmit={handleSearch}>
          <input
            className="search-field"
            placeholder="Enter movie title..."
            type="text"
            id="search"
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
          </input>
          <button type='submit' className='search-button'>Submit Search</button>
        </form>
          <h4 className='search-icon' onClick={handleSearchBar}>☌</h4></> :
          <h4 className='search-icon' onClick={handleSearchBar}>☌</h4>}
        <div className='nav-avatar' onClick={toggleViewUser}>
          <img src={person.profile_img} alt={person.username} className='nav-avatar' />
        </div>
        <div>
          {viewMenu ? null : <NavMenu user={user} setUser={setUser} person={person} setPerson={setPerson} />}
        </div>
      </span>
    </div>
  )
}

export default PersonNav