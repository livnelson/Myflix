// client/src/components/UserHome.js
import React, { useState, useEffect } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import Banner from './Banner'
import PersonNav from './PersonNav'
import Login from './Login'


function PersonHome({ user, setUser, person, setPerson, search, setSearch, handleSearch, setSearchResults, searchResults }) {

  return (
    <div className='app'>
      <PersonNav
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        person={person}
        setPerson={setPerson}
        user={user}
        setUser={setUser}
      />
      <Banner />
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