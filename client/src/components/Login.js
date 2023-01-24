// client/src/components/Login.js
import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import  neflixOpeningSound from '../sounds/netflixOpeningSound.mp3'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login({ onLogin, setPeople }) {
  const [play] = useSound(neflixOpeningSound)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()

 function handleSubmit(e) {
    e.preventDefault();
    play()
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          setPeople(user.people)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleSignUp() {
    navigate('/SignUp')
  }

  return (
    <div className='login-page'>
      <div>
        <img className='login-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      </div>
      <div className='login-body'>
        <div className="login-card">
          <h1 className='login-greeting'>Sign In</h1>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <input
                className="input-field"
                placeholder="Enter Username"
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <input
                className="input-field"
                placeholder="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              {isLoading ? "Loading..." : null}
              <button className="login-button" type="submit">Sign In</button>
            </form>
          </div>
          {errors ? <div className="errors">{errors}</div> : null}
          <p className="sign-up-link" onClick={handleSignUp}> New to Myflix? <span className="sign-up-form-link">Sign up now.</span></p>
          <p className="login-disclaimer">This is a Netflix inspired clone built to give viewers an example of my programming abilities and graphic design skills. This app includes all movie listings from Netflix and may include titles that are considered NSFW or inappropriate for underage viewers. Please consider your environment when viewing. Thanks and enjoy!  ~ Liv</p>
        </div>
      </div>
      <div className='attribution'>
        <div>
        <p className='attribution-title'>Movie Data Provided By:</p>
        <img className='tmdb-logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg' alt="TMDB-logo"/>
        </div>
      </div>
    </div>
  )
}

export default Login