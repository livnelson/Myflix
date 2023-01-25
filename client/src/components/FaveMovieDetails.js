// import React from 'react'
// import '../styles/VideoDetails.css'

// function FaveDetails({ name, backdrop_path, overview, release_date, vote_average, vote_count, person, viewDetails, setViewDetails}) {
  
//   function toggleClose() {
//     setViewDetails(!viewDetails)
//   }

//   return (
//     <div className='modal'>
//       <div className='modal-content' onClick={e => e.stopPropagation()}>
//         <p className='modal-button' onClick={toggleClose}>ⓧ</p>
//         <div>
//           <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={name} className='modal-image' />
//           <div className='modal-fade-bottom'></div>
//         </div>
//         <div className='modal-header'>
//         </div>
//         <div className='modal-details'>
//           <p className='modal-rating'><strong>Popularity:</strong> <em>{vote_average}</em></p>
//           <p className='modal-votes'><strong>Comminity Votes:</strong> <em>{vote_count}</em></p>
//           <p className='modal-date'><strong>Release Date:</strong> <em>{release_date}</em></p>
//         </div>
//         <div className='modal-body'>
//           <h3 className='modal-title'>{name}</h3>
//           <p className='overview'>{overview}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FaveDetails