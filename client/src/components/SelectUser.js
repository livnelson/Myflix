import React, { useState, useEffect } from 'react'
import Login from './Login'
import Nav from './Nav'
import Logout from './Logout'
import User from './User'
import Person from './Person'
import '../styles/SelectUser.css'

function SelectUser({ setUser, user, users, account, setAccount, setIsLoggedIn, avatars, search, setSearch, handleSearch, setSearchResults, searchResults, person, setPerson, people }) {
  // const [users, setUsers] = useState([])

  // useEffect(() => {

  //   const fetchData = async() => {
  //     const response = await fetch('/users')
  //     const users = await response.json()
  //     setUsers(users)
  //   }
  //   fetchData()
  //   // fetch(`/users`)
  //   //   .then((r) => r.json())
  //   //   .then((usersArray) => {
  //   //     console.log(usersArray)
  //   //     setUsers(usersArray)
  //   //   })
  // }, [])

  // if (!user) {
  //   return <Login onLogin={setUser} setUser={setUser} setIsLoggedIn={setIsLoggedIn}  />
  // }

  // const filteredUsers = users.filter((user) => {
  //   if (user.account_id === user.id) return true
  // })

  // const mappedUsers = user.people.map((user) => {
  //   return <User key={user.id} id={user.id} username={user.username} profile_img={user.profile_img} />
  // })

  const mappedPeople = people.map((person) => {
    return <Person
      key={person.id}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      person={person}
      setPerson={setPerson}
      user={user}
      // showProfile={showProfile}
      // setShowProfile={setShowProfile}
       />
  })

  console.log(user)
  // function mappedUsers() {
  //   // debugger
  // }

  // function filteredUsers(){
  //   debugger
  //   console.log(users)
  // }

  console.log(account)

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
      <Logout user={user} setUser={setUser} />
      </div>
    </div>
  )
}

export default SelectUser