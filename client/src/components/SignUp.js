import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/SignUp.css'

function SignUp({ setUser }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const userObj = {
      username,
      password,
    };

    console.log(userObj);

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(userObj),
    };

    fetch("/create", configObject)
      .then((r) => r.json())
      .then((user) => {
        setUsername("")
        setPassword("")
        setUser(user)
        navigate(`/add_profile`)
      });
  }

  return (
    <div className='signup-page'>
      <div>
        <img className='signup-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      </div>
      <div className='signup-body'>
        <div className="signup-card">
          <Link to="/" className="login-back-link">← Back to Log In</Link>
          <h1 className='signup-greeting'>Welcome to Myflix!</h1>
          <div className="signup-form">
            <form className='signup-inputs' onSubmit={handleSubmit}>
              <input
                className="signup-input-field"
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
                className="signup-input-field"
                placeholder="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="signup-button" type="submit">Sign Up Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;