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

  const mappedUsers = users.map((user) => {
    return <User key={user.id} id={user.id} username={user.username} profile_img={user.profile_img} />
  })

  console.log(users)
  // function mappedUsers() {
  //   // debugger
  // }

  // function filteredUsers(){
  //   debugger
  //   console.log(users)
  // }

  console.log(account)

  if (!account) return <Login onLogin={setAccount} setAccount={setAccount} setIsLoggedIn={setIsLoggedIn} />

  return (
    <div className='select-user-page'>
      <img
        className='logo'
        src='./myflix-logo.png'
        alt='MYFLIX-LOGO'
      />
      <h1 className='welcome-greeting'>Who's watching?</h1>
      <div className='select-users'>
        {mappedUsers}
      </div>
      <div className='sign-out-button'>
      <Logout setAccount={setAccount} />
      </div>
    </div>
  )
}

export default SelectUser