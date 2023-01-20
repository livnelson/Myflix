import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard'
import '../styles/SearchResults.css'

function SearchResults({ searchResults }) {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  const mappedSearch = searchResults.results.map((s) => {
    return <MovieCard
      key={s.id}
      id={s.id}
      title={s.title || s.name || s.original_name}
      poster_path={s.poster_path}
      overview={s.overview}
      release_date={s.release_date || s.first_air_date }
      vote_average={s.vote_average}
      vote_count={s.vote_count} />
  })

  console.log(searchResults)

  return (
    <div>
      <div className='search-header'>
      <img className='signup-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <br />
      <Link to='/' onClick={goToHome} className='search-back-link'>← Back to Home</Link>
      </div>
      <div className='search-results'>
      {mappedSearch}
      </div>
    </div>
  )
}

export default SearchResults