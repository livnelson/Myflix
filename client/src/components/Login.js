// client/src/components/Login.js
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  

const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
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
          // console.log(account)
          onLogin(user)
          // setUsers(account.users)
        });
        
      }
      else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleSignUp() {
    // console.log('Link clicked')
    navigate('/SignUp')
  }

  return (
    <div
      style={{
        backgroundImage: `url('./netflix-login-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: '100vh',
        width: '100vw',
      }}
      className='login-page'>
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
          {/* <Link to={<SignUpForm />} className="sign-up-link"> New to Myflix? <strong>Sign up now.</strong></Link> */}
          <p className="sign-up-link" onClick={handleSignUp}> New to Myflix? <span className="sign-up-form-link">Sign up now.</span></p>
          <p className="login-disclaimer">This is a Netflix inspired clone built to give viewers an example of my programming abilities and graphic design skills. This app includes all movie listings from Netflix and may include titles that are considered NSFW or inappropriate for underage viewers. Please consider your environment when viewing. Thanks and enjoy!  ~ Liv</p>
        </div>
      </div>
    </div>
  )
}

export default Login