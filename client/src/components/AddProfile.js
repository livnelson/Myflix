import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import '../styles/SignUp.css'
import '../styles/PersonProfile.css'

function PeopleAdd({ setPerson, user, avatars, setDataFetched, setUpdatedAccount }) {
  const [username, setUsername] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const navigate = useNavigate();


  function handleUsernameChange(e) {
    setUsername(e.target.value);
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
      // first_name: firstName,
      // last_name: lastName,
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

    //  adds user profile to account and navigates to users(person) home
    fetch("/addperson", configObject)
      .then((r) => r.json())
      .then((person) => {
        console.log(person)
        // setFirstName("")
        // setLastName("")
        setUsername("")
        setProfileImg("")
        setPerson(person)
        setDataFetched(true);
        setUpdatedAccount(person)
        navigate(`/Home`)
      });
  }

  // all avatars available for users to choose for thier profile
  const mappedAvatars = avatars.map((avatar) => (
    <img key={avatar.id} id={avatar.id} src={avatar.imgUrl} alt={avatar.name} className='signup-avatars' onClick={() => handleAvatarClick(avatar)} />
  ))

  return (
    <div className='user-profile-page'>
      <div>
        <img className='signup-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      </div>
      <div className='signup-body'>
        <div className="create-profile-card">
          <Link to="/" className="signup-back-link">← Back to Home</Link>
          <h1 className='signup-greeting'>Create a Profile</h1>
          <br />
          <div className="signup-form">
            <form className='signup-inputs' onSubmit={handleSubmit}>
              <input
                className="signup-input-field"
                name="first_name"
                type="text"
                value={username}
                placeholder="Enter Your First Name"
                onChange={handleUsernameChange}
                required
                />
              <br />
              <div className='avatar-section'>
                <h3 className='signup-subheading'>Choose Your Avatar</h3>
                <div className='avatars'>
                  {mappedAvatars}
                </div>
              </div>
              <button className="signup-button" type="submit">Save Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleAdd;