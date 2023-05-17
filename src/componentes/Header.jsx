import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Skills from './Skills'
import '../hojas-de-estilo/Header.css'
const Header = () => {
	return(
        <div className='header'>
      <Navbar />
     <Banner />
      <Skills />
        </div>
		)
}

export default Header;