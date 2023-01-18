// client/src/components/App.js
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import SelectUser from "./SelectUser"
import UserHome from './UserHome'
import UserProfile from './UserProfile'
import SignUp from './SignUp'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState(false)
  const [account, setAccount] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        // r.json().then((user) => setUser(user))
        r.json().then((account) => {
          console.log("INITIAL FETCH")
          setAccount(account)
        })
      }
    });
  }, [])

  return (
    <div>
      <Routes>
        {/* <Route exact path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} /> */}
        {/* <Route exact path='/' element={<SelectUser user={user} account={account} setAccount={setAccount} onLogin={setAccount}setUser={setUser}  />} /> */}
        <Route exact path='/' element={<SelectUser account={account} setAccount={setAccount} onLogin={setAccount} />} />
        {/* <Route exact path='/UserHome' element={<UserHome user={user} onLogin={setUser}  setUser={setUser} />} /> */}
        <Route exact path='/UserHome' element={<UserHome onLogin={setAccount} account={account} setAccount={setAccount} />} />
        {/* <Route exact path='/UserProfile' element={<UserProfile user={user} setUser={setUser} />} onLogin={setUser} /> */}
        <Route exact path='/UserProfile' element={<UserProfile account={account} setAccount={setAccount} />} />
        {/* <Route exact path='/UserProfile' element={<UserProfile user={user} setUser={setUser} />} onLogin={setUser} isLoggedIn={isLoggedIn} avatars={avatars} /> */}
        <Route exact path='/Signup' element={<SignUp setAccount={setAccount} />} />
      </Routes>
    </div>
  );
}

export default App;