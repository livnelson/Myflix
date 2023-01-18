// client/src/components/SignUp.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/SignUp.css'

function SignUp({ setUser, avatars }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const navigate = useNavigate();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const handleAvatarClick = (avatar) => {
    console.log(avatar.id)
    setProfileImg(avatar.imgUrl);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const userObj = {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
      profile_img: profileImg
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
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
        setProfileImg("")
        setUser(user)
        navigate(`/`)
      });
  }

  // const mappedAvatars = avatars.map((avatar) => (
  //   <img key={avatar.id} id={avatar.id} src={avatar.imgUrl} alt={avatar.name} className='signup-avatars' onClick={() => handleAvatarClick(avatar)} />
  // ))

  return (
    <div
      style={{
        backgroundImage: `url('./netflix-login-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: '100vh',
        width: '100vw',
      }}
      className='signup-page'>
      <div>
        <img className='signup-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      </div>
      <div className='signup-body'>
        <div className="signup-card">
          <Link to="/" className="login- back-link">← Back to Log In</Link>
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
              <br />
              <input
                className="signup-input-field"
                name="first_name"
                type="text"
                value={firstName}
                placeholder="Enter Your First Name"
                onChange={handleFirstNameChange}
                required
              />
              <br />
              <input
                className="signup-input-field"
                name="last_name"
                type="text"
                value={lastName}
                placeholder="Enter Your Last Name"
                onChange={handleLastNameChange}
                required
              />
              <br />
              <div className='avatar-section'>
                <h3 className='signup-subheading'>Choose Your Avatar</h3>
                <div className='avatars'>
                  {/* {mappedAvatars} */}
                </div>
              </div>
              {/* {isLoading ? "Loading..." : null} */}
              <button className="signup-button" type="submit">Sign Up Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;