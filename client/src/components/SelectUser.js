import React, { useState, useEffect } from 'react'
import Login from './Login'
import Nav from './Nav'
import Logout from './Logout'
import User from './User'
import '../styles/SelectUser.css'

function SelectUser({ setUsers, users, account, setAccount, setIsLoggedIn, avatars }) {
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

  if (!users) {
    return <h1>Loading...</h1>
  }

  // const filteredUsers = users.filter((user) => {
  //   if (user.account_id === user.id) return true
  // })

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