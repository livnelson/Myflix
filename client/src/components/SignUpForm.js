// client/src/components/SignUp.js
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Avatar from './Avatar'
import '../styles/SignUp.css'

function CreateUser({ setUser, setShowLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [avatars, setAvatars] = useState([]);

  const history = useHistory();

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

  function handlProfileImgChange(e) {
    setProfileImg(e.target.value);
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
        history.push(`/UserHome`)
      });
  }

  // const mappedAvatars = avatars.map((avatar) => {
  //   return <Avatar key={avatar.id} id={avatar.id} name={avatar.name} img_url={avatar.img_url} />
  // })

  return (
    <div>
      <div className="signup-card">
        <p className="back-link" onClick={() => setShowLogin(true)}>← Back to Log In</p>
        <h1 className='greeting'>Welcome to Myflix!</h1>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
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
            <input
              className="input-field"
              name="profile_img"
              value={profileImg}
              placeholder="Enter Profile Img URL Here"
              onChange={handlProfileImgChange}
              required
            />
            <br />
            <div className="avatars">
              <img
                src='https://photos.google.com/share/AF1QipNW2yZ3G0cVDavDeVaZcqfdFyPQaIPapQSanwu6Nj8q4vOkcdbh7VVRqHVTb5pW3g/photo/AF1QipP3WjkxDFD8W3XlF-fPRR1bSKX49oYi8G-AZxwz?key=aE9TbWVSSmhqRXd1eFlkcmpjUzVwbldIX21zZEhR'
                alt='myflix-1'
                className='avatar'
                 />
              <img
                src='https://photos.google.com/share/AF1QipNW2yZ3G0cVDavDeVaZcqfdFyPQaIPapQSanwu6Nj8q4vOkcdbh7VVRqHVTb5pW3g/photo/AF1QipOEEO7HFb_f-0kjZW8Ed_uwv39cy568T_0_JrCZ?key=aE9TbWVSSmhqRXd1eFlkcmpjUzVwbldIX21zZEhR'
                alt='myflix-2' 
                className='avatar'
                />
              <img
                src='https://photos.google.com/share/AF1QipNW2yZ3G0cVDavDeVaZcqfdFyPQaIPapQSanwu6Nj8q4vOkcdbh7VVRqHVTb5pW3g/photo/AF1QipN3PbmxdCSfcJpkdE70fWRC-tAfZ9RlNsPEJJT7?key=aE9TbWVSSmhqRXd1eFlkcmpjUzVwbldIX21zZEhR'
                alt='myflix-3' 
                className='avatar'
                />
              <img
                src='https://photos.google.com/share/AF1QipNW2yZ3G0cVDavDeVaZcqfdFyPQaIPapQSanwu6Nj8q4vOkcdbh7VVRqHVTb5pW3g/photo/AF1QipP35RQNXhIDDJ8e7O-mNXYgyVNa0lwOZFQgBI8I?key=aE9TbWVSSmhqRXd1eFlkcmpjUzVwbldIX21zZEhR'
                alt='myflix-4'
                className='avatar'
                />
              <img
                src='https://photos.google.com/share/AF1QipNW2yZ3G0cVDavDeVaZcqfdFyPQaIPapQSanwu6Nj8q4vOkcdbh7VVRqHVTb5pW3g/photo/AF1QipOsa79FKkeCDvRpjad69eqPnrkFFeJOCOoBSEbW?key=aE9TbWVSSmhqRXd1eFlkcmpjUzVwbldIX21zZEhR'
                alt='myflix-5'
                className='avatar' 
                />
              <img
                src='https://photos.google.com/share/AF1QipNW2yZ3G0cVDavDeVaZcqfdFyPQaIPapQSanwu6Nj8q4vOkcdbh7VVRqHVTb5pW3g/photo/AF1QipN9a-baIe4vgLtjsKV1qxes9wGxLynk5XlpZmgl?key=aE9TbWVSSmhqRXd1eFlkcmpjUzVwbldIX21zZEhR'
                alt='myflix-6' 
                className='avatar'
                />

            </div>
            <button className="button" type="submit">Sign Up Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateUser;