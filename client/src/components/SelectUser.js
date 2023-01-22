import React, { useState, useEffect, useContext } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import { Context } from "../contexts/Context"
import Login from './Login'
import Nav from './Nav'
import Logout from './Logout'
import User from './User'
import Person from './Person'
import SelectProfile from './SelectProfile'

import '../styles/SelectUser.css'

function SelectUser({ setUser, user, users, account, setAccount, setIsLoggedIn, avatars, search, setSearch, handleSearch, setSearchResults, searchResults, person, setPerson, people }) {
  const navigate = useNavigate()

  const mappedPeople = people.map((person) => {
    return <SelectProfile
      key={person.id}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      person={person}
      setPerson={setPerson}
      user={user}
    />
  })

  console.log(user)

  function handleAddPerson() {
    navigate('/PersonAdd')
  }

  if (!user.id) return <Login onLogin={setUser} setAccount={setAccount} setIsLoggedIn={setIsLoggedIn} />

  return (
    <div className='select-user-page'>
      <img
        className='logo'
        src='./myflix-logo.png'
        alt='MYFLIX-LOGO'
      />
      <h1 className='welcome-greeting'>Who's watching?</h1>
      <div className='select-users'>
        {mappedPeople}
      </div>
      <div className='sign-out-button'>
        <button  className='logout-button' onClick={handleAddPerson}>Add a New User</button>
      </div>
    </div>
  )
}

export default SelectUser