import React from 'react'
//import Navbar from './Navbar'
import '../hojas-de-estilo/Footer.css'
import logo from './../assets/img/logo.svg';
import linkedin from './../assets/img/nav-icon1.svg';
import facebook from './../assets/img/nav-icon2.svg';
import instagram from './../assets/img/nav-icon3.svg';

const Footer = () => {
	return(
    <div className='footer'>

    <div className='footer-container'>
      <div className='img-footer-container'>
      <img src={logo} alt="logo" className='logo-footer' />
    </div>

    <div className='footer-details'>

       <div className='socialMedia-container-footer'>

          <div className='icon-container'>
            <a href="#"><img src={linkedin} alt="linkedin" className='icon-socialMedia-links' /></a>
          </div>
          <div className='icon-container'>
            <a href="#"><img src={facebook} alt="facebook" className='icon-socialMedia-links' /></a>
          </div>
           <div className='icon-container'>
            <a href="#"><img src={instagram} alt="instagram" className='icon-socialMedia-links' /></a>
          </div>
          
        </div>
        <p>Copyright 2022. All Rights Reserved</p>
    </div>
    </div>
    </div>
		)
}

export default Footer;