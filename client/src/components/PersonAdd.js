import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/SignUp.css'

function PeopleAdd({ setPerson, user, avatars, setPeople, people }) {

  const [username, setUsername] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const navigate = useNavigate();


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
    console.log(user)
    e.preventDefault();
    console.log("submitted");

    const userObj = {
      first_name: firstName,
      last_name: lastName,
      username,
      profile_img: profileImg,
      user_id: user.id
    };

    console.log(userObj);

    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(userObj),
    };

    fetch("/addperson", configObject)
      .then((r) => r.json())
      .then((person) => {
        console.log(person)
        setFirstName("")
        setLastName("")
        setUsername("")
        setProfileImg("")
        setPerson(person)
        // setPeople(...people, person)
        navigate(`/`)
      });
  }

  const mappedAvatars = avatars.map((avatar) => (
    <img key={avatar.id} id={avatar.id} src={avatar.imgUrl} alt={avatar.name} className='signup-avatars' onClick={() => handleAvatarClick(avatar)} />
  ))

  return (
    <div
      className='signup-page'>
      <div>
        <img className='signup-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      </div>
      <div className='signup-body'>
        <div className="signup-card">
          <Link to="/" className="login-back-link">← Back to Home</Link>
          <h1 className='signup-greeting'>Add a New User</h1>
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
                  {mappedAvatars}
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

export default PeopleAdd;