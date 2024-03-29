import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import SelectProfile from './SelectProfile'
import '../styles/SelectProfile.css'


function WelcomePage({ setUser, user, setAccount, setIsLoggedIn, setPerson, people, setPeople }) {
  const navigate = useNavigate()

  // maps over people to allow users to choose and view their profile
  const mappedPeople = people.map((person) => {
    return <SelectProfile
      key={Math.random()}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      person={person}
      setPerson={setPerson}
      user={user}
    />
  })

  // console.log(user)

  function handleManageAccount() {
    navigate('/manage_profiles')
  }

  function handleAddPerson() {
    navigate('/add_profile')
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
      <br />
      <div className='select-users'>
        {mappedPeople}
      </div>
      <div className='sign-out-buttons'>
        <button className='manageprofile-button' onClick={handleManageAccount}>Manage Account</button>
        <Logout
          setUser={setUser}
          user={user}
          setIsLoggedIn={setIsLoggedIn}
          setPerson={setPerson}
          people={people} />
        <button className='manageprofile-button' onClick={handleAddPerson}>Create A Profile</button>
      </div>
    </div>
  )
}

export default WelcomePage