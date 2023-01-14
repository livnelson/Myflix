// client/src/components/Login.js
import React, { useState } from 'react'
import '../styles/Login.css'

function Login({ onLogin, setIsLoggedIn }) {
  // const [user, setUser] = useState({})
  // const [errors, setErrors] = useState([])
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: ''
  // })
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  // const { username, password } = formData

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
        r.json().then((user) => onLogin(user));
      } 
      else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }

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
          <p className="sign-up-link" onClick={() => setIsLoggedIn(false)}> New to Myflix? <strong>Sign up now.</strong></p>
          <p className="login-disclaimer">This is a Netflix inspired clone built to give viewers an example of my programming abilities and graphic design skills. This app includes all movie listings from Netflix and may include titles that are considered NSFW or inappropriate for underage viewers. Please consider your environment when viewing. Thanks and enjoy!  ~ Liv</p>
        </div>
      </div>
    </div>
  )
}

export default Login