import React from 'react'
import ApiButton from './ApiButton'
import AuthenticationButton from './AuthenticationButton'



function Navbar() {

  return (
    <div className="navbar">
       <AuthenticationButton /> 
       <ApiButton />
    </div>
  )
}

export default Navbar