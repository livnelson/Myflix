import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import UserProfile from './UserProfile'
import SignUp from './SignUp'
import SearchResults from "./SearchResults"
import PersonProfile from './PersonProfile'
import PersonHome from './PersonHome'
import PersonAdd from './PersonAdd'
import SelectUser from './SelectUser'
import CurrentPeople from "./CurrentPeople"
// import { Context } from "../contexts/Context"

function App() {
  const [user, setUser] = useState({})
  const [avatars, setAvatars] = useState([])
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})
  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [myFaves, setMyFaves] = useState([])
  // const [myList, setMylist] = useState('')
  // const [profileImg, setProfileImg] = useState('')
  // const [showProfile, setShowProfile] = useState(false)
  // const [username, setUsername] = useState('')

  // const { user, setUser, people, setPeople, fetchMe } = useContext(Context)

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setPeople(user.people)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/profile_me").then((r) => {
      if (r.ok) {
        r.json().then((person) => {
          setPerson(person)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch('/avatars')
      .then((res) => res.json())
      .then((avatars) => {
        console.log(avatars)
        setAvatars(avatars)

      })
  }, [])

    const mappedCurrentPeople = people.map(person => {
    return <CurrentPeople key={person.id} id={person.id} username={person.username} profile_image={person.profile_image} />
  })

  console.log(mappedCurrentPeople)

  return (
    <div>
      <Routes>
        <Route exact path='/' element={
          <SelectUser
            user={user}
            setUser={setUser}
            earch={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            person={person}
            setPerson={setPerson}
            people={people}
            setPeople={setPeople} />}
        />
        {/* <Route exact path='/' element={
          <UserHome
            user={user}
            setUser={setUser}
            earch={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            person={person}
            setPerson={setPerson}
            people={people} />}
        /> */}
        <Route exact path='/Home' element={
          <PersonHome
            user={user}
            setUser={setUser}
            earch={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            person={person}
            setPerson={setPerson}
            people={people} />}
        />
        <Route exact path='/manage_profiles' element={
          <UserProfile
            user={user}
            onLogin={setUser}
            setUser={setUser}
            people={people} />} />
        <Route exact path='/Signup' element={<SignUp avatars={avatars} setUser={setUser} />} />
        <Route exact path='/SearchResults' element={
          <SearchResults
            search={search}
            searchResults={searchResults} />}
        />
        <Route exact path='/profile' element={
          <PersonProfile
            search={search}
            searchResults={searchResults}
            user={user}
            person={person}
            setPerson={setPerson}
            myFaves={myFaves}
            setMyFaves={setMyFaves} />}
        />
        <Route exact path='/add_profile' element={
          <PersonAdd
            user={user}
            person={person}
            avatars={avatars}
            setPerson={setPerson}
            setPeople={setPeople}
            people={people} />}
        />
      </Routes>
    </div>
  );
}

export default App;