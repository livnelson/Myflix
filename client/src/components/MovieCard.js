import React from 'react'
import '../styles/SearchResults.css'

function MovieCard({ id, title, poster_path, overview, release_date, vote_average, vote_count }) {

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }


  return (
    <div>
    <div className='movie-card'>
      <img className='search-image' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
      <h3 className='search-title'>{title}</h3>
      <br/>
      <p className='search-overview'>{truncate(overview, 300)}</p>
      <br/>
      <p className='search-overview'><strong>Release Date:</strong> <em>{release_date}</em></p>
      <p className='search-overview'><strong>Popularity:</strong> <em>{vote_average}</em></p>
      <p className='search-overview'><strong>Community Votes:</strong> <em>{vote_count}</em></p>
    </div>
    </div>
  )
}

export default MovieCard