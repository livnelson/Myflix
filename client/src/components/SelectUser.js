import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Context } from "../contexts/Context"
import Login from './Login'
// import Nav from './Nav'
import Logout from './Logout'
// import User from './User'
// import Person from './Person'
import SelectProfile from './SelectProfile'

import '../styles/SelectUser.css'

function SelectUser({ setUser, user, setAccount, setIsLoggedIn, setPerson, people, setPeople }) {
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
    navigate('/manage_profiles')
  }

  if (!user.id) return <Login 
                          onLogin={setUser} 
                          setAccount={setAccount} 
                          setIsLoggedIn={setIsLoggedIn} 
                          people={people} 
                          setPeople={setPeople} />

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
        <button  className='logout-button' onClick={handleAddPerson}>Manage Profiles</button>
        <Logout setUser={setUser} user={user} setAccount={setAccount} setIsLoggedIn={setIsLoggedIn} setPerson={setPerson} people={people}  />
      </div>
    </div>
  )
}

export default SelectUser