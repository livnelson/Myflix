import React from 'react'
import { useNavigate } from 'react-router-dom'
import SwitchProfile from './SwitchProfile'
import '../styles/NavMenu.css'


function PersonNavMenu({ user, person, setPerson, viewMenu, setViewMenu, list, setList }) {
  const navigate = useNavigate()

  function handleMainMenu() {
    navigate('/')
  }

  // sets user selected from NavMenu
  function handleViewProfile() {
    console.log(person.id)
    fetch(`/person_profile/${person.id}`)
      .then((res) => res.json())
      .then((personObj) => {
        console.log(personObj)
        setViewMenu(!viewMenu)
        setPerson(personObj)
        setList(personObj.lists)
        navigate('/profile')
      })
  }

  // current users to select
  const mappedPeople = user.people.map((person) => {
    return <SwitchProfile
      key={Math.random()}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      person={person}
      setPerson={setPerson}
      viewMenu={viewMenu}
      setViewMenu={setViewMenu}
      list={list}
      setList={setList}
    />
  })

  return (
    <div className='navmenu'>
      <div className='nav-dropdown'>
        {mappedPeople}
        <div className='logout'>
          <div>
          <button id='logout-button' onClick={handleViewProfile}>View Your Profile</button>
          <button id='logout-button' onClick={handleMainMenu}>Back to Main Menu</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonNavMenu