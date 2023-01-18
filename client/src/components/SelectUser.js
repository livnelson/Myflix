import React from 'react'
import Login from './Login'
import Nav from './Nav'
import '../styles/SelectUser.css'

function SelectUser({ account, setAccount, user, setUser, setIsLoggedIn }) {

  console.log(account)

  // if (!user) return  <Login onLogin={setUser} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
  if (!account) return <Login onLogin={setUser} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />

  return (
    <div className='select-user-page'>
      <Nav user={user} account={account} />

      <h1 className='welcome-greeting'>Who's Watching?</h1>
    </div>
  )
}

export default SelectUser