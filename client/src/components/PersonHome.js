// client/src/components/UserHome.js
import React, { useState, useEffect } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import PersonBanner from './PersonBanner'
import PersonNav from './PersonNav'
import SelectUser from './SelectUser'
import Login from './Login'


function PersonHome({ user, setUser, setIsLoggedIn, search, setSearch, handleSearch, setSearchResults, searchResults, person, setPerson, people }) {
  const [addToFave, setAddToFave] = useState({})
  if (!person.id) return  <SelectUser />

  return (
    <div className='app'>
      <PersonNav 
        user={user} 
        setUser={setUser} 
        search={search} 
        setSearch={setSearch} 
        handleSearch={handleSearch} 
        setSearchResults={setSearchResults} 
        searchResults={searchResults} 
        person={person} 
        setPerson={setPerson}
        people={people} />
      <PersonBanner  person={person} setAddToFave={setAddToFave} addToFave={addToFave}  />
      <br />
      <Row
        title="Myflix { Netflix }  Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default PersonHome