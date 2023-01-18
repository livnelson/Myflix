// client/src/components/App.js
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import UserHome from './UserHome'
import UserProfile from './UserProfile'
import SignUp from './SignUp'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(false)
  const [avatars, setAvatars] = useState ([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, [])

  useEffect(() => {
    fetch('/avatars')
      .then((r) => r.json())
      .then(avatars => {
        console.log(avatars)
        setAvatars(avatars)
      })
  },[])

  return (
    <div>
      <Routes>
        {/* <Route exact path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} /> */}
        <Route exact path='/' element={<UserHome user={user} onLogin={setUser} setIsLoggedIn={setIsLoggedIn} setUser={setUser}  />} />
        <Route exact path='/UserProfile' element={<UserProfile user={user} setUser={setUser} />} onLogin={setUser} isLoggedIn={isLoggedIn} avatars={avatars} />
        <Route exact path='/Signup' element={<SignUp setUser={setUser} />} />
      </Routes>
      {/* {errors ? <div>{errors}</div> : null} */}
    </div>
  );
}

export default App;