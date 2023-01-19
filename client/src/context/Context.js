import React, { createContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom' 

export const Context = createContext()

const ContextProvider = (props) => {
  // const navigate = useNavigate()
  const [account, setAccount] = useState()
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profileImg, setProfileImg] = useState('')
  
  return (
   <Context.Provider value={{
    account,
    setAccount,
    user,
    setUser,
    userList,
    setUserList,
    username,
    setUsername,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    profileImg,
    setProfileImg
   }}>
    {props.children}
    </Context.Provider>
  )
}

export default ContextProvider