import '../styles/SelectProfile.css'

function CurrentPeople({ username, profile_img}) {

  return (
    <div id='current-people'>
      <img id='avatar' src={profile_img} alt={username} />
     <p>{username}</p>
    </div>
  )
}

export default CurrentPeople