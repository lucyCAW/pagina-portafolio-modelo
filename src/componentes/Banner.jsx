import React,{useState} from 'react';
import '../hojas-de-estilo/Banner.css'
import header from './../assets/img/header-img.svg';
import arrow from './../assets/img/arrow2.svg';


const Banner = () => {
	return(
          <>
         <section className='banner' id='home'>
         	<div className='section-details'>
         		<span className='banner-description'>Welcome to my Portfolio</span>
         	<h1 className='banner-title'>Hi! I'm Jared U</h1>
         	<p className='banner-paragraph'>lorem ipsum is simple dummy text of the printhin and typeting industry lorem imput has been the orem ipsum is simple dummy text of the printhin and typeting industry lorem imput has been the </p>
         	<div className='btn-container'>
              <button className='banner-btn'>Let's Connect</button>
              <div className='arrow-btn-container'>
                  <img src={arrow} alt="flecha" className='arrow-btn' /> 
              </div> 
            </div>
         	</div>
         	<img src={header} alt="side-img" className='side-img' />
         </section>
          </>
		)
}

export default Banner;