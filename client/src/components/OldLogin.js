import { useState } from "react";
// import styled from "styled-components";
import Login from "./Login";
// import { Button } from "../styles";

function OldLogin() {
  const [showLogin, setShowLogin] = useState(true);

  function toggleLogin() {
    setShowLogin(!showLogin);
  }

  return (
    <>
      {showLogin ? (<Login toggleLogin={toggleLogin} setShowLogin={setShowLogin} />) : null }
    </>
  );
}

export default OldLogin;