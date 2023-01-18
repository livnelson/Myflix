// client/src/components/UserHome.js
import React, { useEffect } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import Login from './Login'


// function UserHome({ user, setUser, setIsLoggedIn}) {
function UserHome({ user, account, setAccount, setIsLoggedIn }) {


  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       // r.json().then((user) => setUser(user))
  //       r.json().then((account) => setAccount(account))
  //     }
  //   });
  // }, [])

  console.log(user)
  console.log(account)

  // if (!user) return  <Login onLogin={setUser} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
  if (!account) return <Login  onLogin={setAccount} setIsLoggedIn={setIsLoggedIn} />

  return (
    <div className='app'>
      <Nav user={user} />
      <Banner user={user} />
      <br />
      <Row
        title="Myflix { Netflix }  Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrendingNow} />
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