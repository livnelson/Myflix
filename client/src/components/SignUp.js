// client/src/components/SignUp.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/SignUp.css'

function SignUpForm({ setUser, avatars }) {

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

  // function handlProfileImgChange(e) {
  //   setProfileImg(e.target.value);
  // }

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

  const mappedAvatars = avatars.map((avatar) => (
    <img key={avatar.id} id={avatar.id} src={avatar.imgUrl} alt={avatar.name} className='signup-avatars' onClick={() => handleAvatarClick(avatar)} />
  ))

  const handleAvatarClick = (avatar) => {
    console.log(avatar.id)
    setProfileImg(avatar.imgUrl);
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
      className="signup-page"
    >
      <div>
        <img className='signup-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      </div>
      <div className='signup-body'>
        <div className="signup-card">
          <Link to="/" className="back-link">← Back to Log In</Link>
          <h1 className='greeting'>Welcome to Myflix!</h1>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="signup-inputs">
                <input
                  className="input-field"
                  name="username"
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={handleUsernameChange}
                  required
                />
                <br />
                <input
                  className="input-field"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={handlePasswordChange}
                  required
                />
                <br />
                <input
                  className="input-field"
                  name="first_name"
                  type="text"
                  value={firstName}
                  placeholder="Enter Your First Name"
                  onChange={handleFirstNameChange}
                  required
                />
                <br />
                <input
                  className="input-field"
                  name="last_name"
                  type="text"
                  value={lastName}
                  placeholder="Enter Your Last Name"
                  onChange={handleLastNameChange}
                  required
                />
                <br />
              </div>
              <div className='avatar-section'>
                <h4 className='subheading'>Choose Your Avatar</h4>
                <div className='avatars'>
                  {mappedAvatars}
                </div>
              </div>
              {/* <input
              className="input-field"
              name="profile_img"
              value={profileImg}
              placeholder="Enter Profile Img URL Here"
              onChange={handlProfileImgChange}
              required
            /> */}
              <br />
              <button className="button" type="submit">Sign Up Now</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SignUpForm;