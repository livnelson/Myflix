// client/src/components/UserHome.js
import React, { useState, useEffect } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import Login from './Login'


function UserHome({ users, setUsers, user, setUser, account, setAccount, setIsLoggedIn }) {

  console.log(user)
  // console.log(account)

  if (!user) return  <Login onLogin={setUser} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />

  return (
    <div className='app'>
      <Nav 
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
      <Banner user={user} setUser={setUser} />
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

export default UserHome