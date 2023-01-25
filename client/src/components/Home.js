// client/src/components/UserHome.js
import React, { useState } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import Banner from './Banner'
import NavBar from './NavBar'
import WelcomePage from './WelcomePage'


function Home({ user, setUser, search, setSearch, handleSearch, setSearchResults, searchResults, person, setPerson, people, list, setList }) {
  const [addToFave, setAddToFave] = useState({})
  const [myFaves, setMyFaves] = useState([])

  if (!person.id) return  <WelcomePage   
                            user={user}
                            setUser={setUser}
                            search={search}
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
      <NavBar
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
      <Banner person={person} setAddToFave={setAddToFave} addToFave={addToFave} setList={setList} />
      <br />
      <Row title="Myflix { Netflix } Originals" fetchURL={requests.fetchNetflixOriginals} />
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

export default Home