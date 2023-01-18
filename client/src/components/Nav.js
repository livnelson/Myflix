// client/src/components/Nav.js
import React, { useState, useEffect } from 'react'
import NavMenu from './NavMenu'
import '../styles/Nav.css'


function Nav({ user }) {
  const [show, handleShow] = useState(false)
  const [viewMenu, setViewMenu] = useState(true)
  const [accountUsers, setAccountUsers] = useState([])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        handleShow(true)
      }
      else handleShow(false)
    })
    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, [])

  function toggleViewUser() {
    setViewMenu(!viewMenu)
    // console.log(user)
  }

  useEffect(() => {
    fetch('/accout_users')
    .then((r) => r.json())
    .then(acctUsers => {
      // console.log(acctUsers)
      setAccountUsers(acctUsers)
    })
  },[])

  return (
    <div className={`nav ${show && 'nav-black'}`} >
      <img
        className='nav-logo'
        src='./myflix-logo.png'
        alt='MYFLIX-LOGO'
      />
      <div className='logout-button'>
      </div>
      <div className='nav-avatar' onClick={toggleViewUser}>
      <img src={user.profile_img} alt={user.first_name} className='nav-avatar'/>
      </div>
      {viewMenu ? null : <NavMenu user={user} accountUsers={accountUsers} />}
    </div>
  )
}

export default Nav