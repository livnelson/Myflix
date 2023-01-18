import React, { useState, useEffect } from 'react'
import Login from './Login'
import Nav from './Nav'
import Logout from './Logout'
import '../styles/SelectUser.css'

function SelectUser({ account, setAccount, setIsLoggedIn }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`/users`)
    .then((r) => r.json())
      .then((usersArray) => {
        console.log(usersArray)
        setUsers(usersArray)
      })
  },[])

  if (!account) return <Login onLogin={setAccount} setAccount={setAccount} setIsLoggedIn={setIsLoggedIn} />

  return (
    <div className='select-user-page'>
      <Nav />
      <Logout setAccount={setAccount} />
      <h1 className='welcome-greeting'>Who's watching?</h1>
    </div>
  )
}

export default SelectUser