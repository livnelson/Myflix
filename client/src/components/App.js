// client/src/components/App.js
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import SelectUser from "./SelectUser"
import UserHome from './UserHome'
import UserProfile from './UserProfile'
import SignUp from './SignUp'
import Login from './Login'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(false)
  const [account, setAccount] = useState(null)
  const [avatars, setAvatars] = useState([])
  const [users, setUsers] = useState([])

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/avatars')
    .then((res) => res.json())
    .then((avatars) => { 
      console.log(avatars)
      setAvatars(avatars)
    })
  },[])

  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Login  onLogin={setAccount} setAccount={setAccount} setIsLoggedIn={setIsLoggedIn} users={users} setUsers={setUsers} />} /> */}
        {/* <Route exact path='/' element={<SelectUser user={user} account={account} setAccount={setAccount} onLogin={setAccount}setUser={setUser}  />} /> */}
        {/* <Route exact path='/SelectUser' element={<SelectUser account={account} setAccount={setAccount} onLogin={setAccount} avatars={avatars} users={users} setUsers={setUsers}  />} /> */}
        <Route exact path='/' element={<UserHome user={user} setUser={setUser} />} />
        {/* <Route exact path='/' element={<UserHome onLogin={setAccount} account={account} setAccount={setAccount} users={users} setUsers={setUsers}user={user} />} /> */}
        <Route exact path='/UserProfile' element={<UserProfile user={user} setUser={setUser} />} onLogin={setUser} />
        {/* <Route exact path='/UserProfile' element={<UserProfile account={account} setAccount={setAccount} />} /> */}
        {/* <Route exact path='/UserProfile' element={<UserProfile user={user} setUser={setUser} />} onLogin={setUser} isLoggedIn={isLoggedIn} avatars={avatars} /> */}
        <Route exact path='/Signup' element={<SignUp setAccount={setAccount} avatars={avatars} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;