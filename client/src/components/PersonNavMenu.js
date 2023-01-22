import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import Logout from './Logout'
import Person from './Person'
import '../styles/NavMenu.css'


function PersonNavMenu({ user, setUser, person, setPerson, people }) {
  const navigate = useNavigate()
  
  function handleAddPerson() {
    navigate('/PersonAdd')
  }
console.log(person)
  function handleViewProfile() {
    console.log(person.id)

    fetch(`/person_profile/${person.id}`)
      .then((res) => res.json())
      .then((personObj) => {
        console.log(personObj)
        setPerson(personObj)
        navigate('/PersonProfile')
        // setShowProfile(!showProfile)
      })
  }

  const mappedPeople = user.people.map((person) => {
    return <Person
      key={person.id}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      person={person}
      setPerson={setPerson}
      // showProfile={showProfile}
      // setShowProfile={setShowProfile}
       />
  })

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
          <button className='logout-button'  onClick={handleViewProfile}>View Profile</button>
          <br />
          <button className='logout-button'  onClick={handleAddPerson}>Add User</button>
          <Logout user={user} setUser={setUser} />
        </div>
      </div>
      {/* {showProfile ? <PersonProfile /> : null} */}
    </div>
  )
}

export default PersonNavMenu