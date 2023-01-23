// client/src/components/UserHome.js
import React, { useState, useEffect } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import PersonBanner from './PersonBanner'
import PersonNav from './PersonNav'
import WelcomePage from './WelcomePage'
import Login from './Login'


function PersonHome({ user, setUser, search, setSearch, handleSearch, setSearchResults, searchResults, person, setPerson, people, list, setList }) {
  const [addToFave, setAddToFave] = useState({})
  const [myFaves, setMyFaves] = useState([])

  if (!person.id) return  <WelcomePage   
                            user={user}
                            setUser={setUser}
                            earch={search}
                            setSearch={setSearch}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            person={person}
                            setPerson={setPerson}
                            people={people}
                            myFaves={myFaves}
                            setMyFaves={setMyFaves} />

  return (
    <div className='app'>
      <PersonNav
        key={person.id}
        user={user} 
        setUser={setUser} 
        search={search} 
        setSearch={setSearch} 
        handleSearch={handleSearch} 
        setSearchResults={setSearchResults} 
        searchResults={searchResults} 
        person={person} 
        setPerson={setPerson}
        people={people}
        list={list}
        setList={setList} />
      <PersonBanner key={person.id} person={person} setAddToFave={setAddToFave} addToFave={addToFave}  />
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