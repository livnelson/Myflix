import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

export const Context = createContext()

const ContextProvider = (props) => {
  const navigate = useNavigate()
  
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const [avatars, setAvatars] = useState([])
  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [person, setPerson] = useState({})
  const [movie, setMovie] = useState([])
  const [viewDetails, setViewDetails] = useState(true)
  const [playVideo, setPlayVideo] = useState(true)
  const [errors, setErrors] = useState(false)
  const [editUsername, setEditUsername] = useState()
  const [editPassword, setEditPassword] = useState("");
  const [editFirstName, setEditFirstName] = useState("")
  const [editLastName, setEditLastName] = useState("")
  const [editAvatar, setEditAvatar] = useState("")
  const [hover, setHover] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [viewMenu, setViewMenu] = useState(true)
  const [searchAPI, setSearchAPI] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [myFaves, setMyFaves] = useState([])
  const [addToFave, setAddToFave] = useState(false)
  const [like, setLike] = useState(false)
  const [voteCount, setVoteCount] = useState(false)
  const [addToList, setAddToList] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [movies, setMovies] = useState([])
  const [trailerURL, setTrailerURL] = useState('')
  // const [people, setPeople] = useState= ([])


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   }).then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }

    // // auto-login
    // useEffect(() => {
    //   fetch("/me").then((r) => {
    //     if (r.ok) {
    //       r.json().then((user) => {
    //         setUser(user)
    //         // setPeople(user.people)
    //       });
    //     }
    //   });
    // }, []);

    const store = {
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
      setProfileImg,
      avatars,
      setAvatars,
      search,
      setSearch,
      searchResults,
      setSearchResults,
      person,
      setPerson,
      movie,
      setMovie,
      viewDetails,
      setViewDetails,
      playVideo,
      setPlayVideo,
      errors,
      setErrors,
      editUsername,
      setEditUsername,
      editPassword,
      setEditPassword,
      editFirstName,
      setEditFirstName,
      editLastName,
      setEditLastName,
      editAvatar,
      setEditAvatar,
      hover,
      setHover,
      isLoading,
      setIsLoading,
      show,
      setShow,
      viewMenu,
      setViewMenu,
      searchAPI,
      setSearchAPI,
      showEdit,
      setShowEdit,
      myFaves,
      setMyFaves,
      addToFave,
      setAddToFave,
      like,
      setLike,
      voteCount,
      setVoteCount,
      addToList,
      setAddToList,
      showMessage,
      setShowMessage,
      movies,
      setMovies,
      trailerURL,
      setTrailerURL,
      // people,
      // setPeople,
      // handleSubmit,
    }

  return (
    <Context.Provider value={{store}}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider