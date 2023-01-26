import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AccountProfile from './AccountProfile'
import SignUp from './SignUp'
import SearchResults from "./SearchResults"
import UserProfile from './UserProfile'
import Home from './Home'
import AddProfile from './AddProfile'
import WelcomePage from './WelcomePage'

function App() {
  const [user, setUser] = useState({})
  const [avatars, setAvatars] = useState([])
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})
  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [list, setList] = useState([])
  const [updatedAccount, setUpdatedAccount] = useState({})
  const [updatedProfile, setUpdatedProfile] = useState({})
  const [dataFetched, setDataFetched] = useState(false)
  const [errors, setErrors] = useState()

  
  // auto-account-login
  useEffect(() => {
    if (updatedAccount || !dataFetched) {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            // console.log(user)
            setUser(user)
            setPeople(user.people)
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }, [updatedAccount, dataFetched, setPerson, setPeople, setUpdatedProfile, setDataFetched]);

  // auto-profile-login & refresh user list on change
  useEffect(() => {
    if (updatedProfile || !dataFetched) {
      fetch("/profile_me").then((r) => {
        if (r.ok) {
          r.json().then((person) => {
            // console.log(person)
            setPerson(person)
            setList(person.lists)
          });
        }
      });
    }
  }, [updatedProfile, dataFetched, setPerson, setUpdatedProfile, setDataFetched]);

  //fetches all avatars available to choose from 
  useEffect(() => {
    fetch('/avatars')
      .then((res) => res.json())
      .then((avatars) => {
        // console.log(avatars)
        setAvatars(avatars)
      })
  }, [])

  const deleteProfile = (id) => setPeople(current => current.filter(p => p.id !== id))

  return (
    <div>
      <Routes>
        <Route exact path='/' element={
          <WelcomePage
            user={user}
            setUser={setUser}
            earch={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            person={person}
            setPerson={setPerson}
            people={people}
            setPeople={setPeople}
            errors={errors} />}
        />
        <Route exact path='/Home' element={
          <Home
            user={user}
            setUser={setUser}
            earch={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            person={person}
            setPerson={setPerson}
            people={people}
            list={list}
            setList={setList} />}
        />
        <Route exact path='/manage_profiles' element={
          <AccountProfile
            user={user}
            onLogin={setUser}
            setUser={setUser}
            people={people}
            setPeople={setPeople}
            deleteProfile={deleteProfile}
            setDataFetched={setDataFetched}
            setUpdatedProfile={setUpdatedProfile} />} 
          />
        <Route exact path='/signup' element={<SignUp avatars={avatars} setUser={setUser} />} />
        <Route exact path='/SearchResults' element={
          <SearchResults
            search={search}
            searchResults={searchResults} />}
          />
        <Route exact path='/profile' element={
          <UserProfile
            search={search}
            searchResults={searchResults}
            user={user}
            person={person}
            setPerson={setPerson}
            list={list}
            setList={setList}
            setUpdatedProfile={setUpdatedProfile}
            setDataFetched={setDataFetched}
            deleteProfile={deleteProfile} />}
          />
        <Route exact path='/add_profile' element={
          <AddProfile
            user={user}
            person={person}
            avatars={avatars}
            setPerson={setPerson}
            setPeople={setPeople}
            people={people}
            setDataFetched={setDataFetched}
            setUpdatedAccount={setUpdatedAccount} />}
          />
      </Routes>
    </div>
  );
}

export default App;