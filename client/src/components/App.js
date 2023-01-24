import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AccountProfile from './AccountProfile'
import SignUp from './SignUp'
import SearchResults from "./SearchResults"
import PersonProfile from './PersonProfile'
import Home from './Home'
import PersonAdd from './PersonAdd'
import WelcomePage from './WelcomePage'

function App() {
  const [user, setUser] = useState({})
  const [avatars, setAvatars] = useState([])
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})
  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [myFaves, setMyFaves] = useState([])
  const [list, setList] = useState([])
  const [updatedProfile, setUpdatedProfile] = useState({})
  const [dataFetched, setDataFetched] = useState(false)

  // auto-account-login
  useEffect(() => {
    if (updatedProfile || !dataFetched) {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            // console.log(user)
            setUser(user)
            setPeople(user.people)
          });
        }
      });
    }
  }, [updatedProfile, dataFetched, setUpdatedProfile, setDataFetched]);

  // auto-profile-login & refresh user list on change
  useEffect(() => {
      fetch("/profile_me").then((r) => {
        if (r.ok) {
          r.json().then((person) => {
            console.log(person)
            setPerson(person)
            setList(person.lists)
          });
        }
      });
  }, []);

  //fetches all avatars available to choose from 
  useEffect(() => {
    fetch('/avatars')
      .then((res) => res.json())
      .then((avatars) => {
        console.log(avatars)
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
            setPeople={setPeople} />}
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
            setPerson={setPerson}
            deleteProfile={deleteProfile}
            setDataFetched={setDataFetched} />} />
        <Route exact path='/signup' element={<SignUp avatars={avatars} setUser={setUser} />} />
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
            setMyFaves={setMyFaves}
            list={list}
            setList={setList} />}
        />
        <Route exact path='/add_profile' element={
          <PersonAdd
            user={user}
            person={person}
            avatars={avatars}
            setPerson={setPerson}
            setPeople={setPeople}
            people={people}
            setDataFetched={setDataFetched} />}
        />
      </Routes>
    </div>
  );
}

export default App;