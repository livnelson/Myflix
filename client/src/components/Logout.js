// client/src/components/Logout.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setAccount }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      console.log("User logged out")
      setAccount(false)
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