// client/src/components/Login.js
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Login.css'

function Login({ setIsLoggedIn, setUser }) {
  // const [user, setUser] = useState({})
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const { username, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }

    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
            setIsLoggedIn(true)
            setUser(user)
            navigate(`/UserHome`)
          })
        } 
        else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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
            <form onSubmit={onSubmit}>
              <input
                className="input-field"
                name="username"
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={handleChange}
                required
              />
              <br />
              <input
                className="input-field"
                name="password"
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={handleChange}
                required
              />
              <br />
              <button className="login-button" type="submit">Sign In</button>
            </form>
          </div>
          {errors ? <div className="errors">{errors}</div> : null}
          <p className="sign-up-link"> New to Myflix? <Link to="/SignUp"><strong>Sign up now.</strong></Link></p>
          <p className="login-disclaimer">This is a Netflix inspired clone  built to give viewers an example of my programming abilities and graphic design skills. This app includes all movie listings from Netflix and may include titles that are considered NSFW or inappropriate for underage viewers. Please consider your environment when viewing. Thanks and enjoy!  ~ Liv</p>
        </div>
        {errors? <div>{errors}</div>:null}
      </div>
    </div>
  )
}

export default Login