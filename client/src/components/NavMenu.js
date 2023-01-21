// client/src/components/NavMenu.js
import React, { useState } from 'react'
import Logout from './Logout'
import Person from './Person'
import { Link } from 'react-router-dom'
import '../styles/NavMenu.css'


function NavMenu({ user, setUser, person, setPerson, people, mappedPeople }) {
  

  // const mappedPeople = people.map((person) => {
  //   return <Person
  //     key={person.id}
  //     id={person.id}
  //     username={person.username}
  //     profile_img={person.profile_img}
  //     person={person}
  //     setPerson={setPerson}
  //     // showProfile={showProfile}
  //     // setShowProfile={setShowProfile}
  //      />
  // })

  return (
    <div className='navmenu'>
      <div className='nav-dropdown'>
        <Link to="/UserProfile">
          <div className='current-user'>
            <img className="current-user-avatar" src={user.profile_img} alt={user.username} />
            <p className='current-user-name'>{user.username}</p>
          </div>
        </Link>
        {mappedPeople}
        <div className='logout'>
          <button className='logout-button'>Add User</button>
          <Logout user={user} setUser={setUser} />
        </div>
      </div>
      {/* {showProfile ? <PersonProfile /> : null} */}
    </div>
  )
}

export default NavMenu