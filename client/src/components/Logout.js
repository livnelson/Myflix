import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Logout.css'

function Logout({ setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      console.log("User logged out")
      setUser(false)
      navigate("/");
    })
  }

  return (
    <div className="logout">
      <button className="logout-button" onClick={handleLogout}>
      Sign out of Myflix
      </button>
    </div>
  );
}

export default Logout;