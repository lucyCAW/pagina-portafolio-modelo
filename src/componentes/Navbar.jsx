import React,{useState} from 'react';
import '../hojas-de-estilo/Navbar.css'
import logo from './../assets/img/logo.svg';
import linkedin from './../assets/img/nav-icon1.svg';
import facebook from './../assets/img/nav-icon2.svg';
import instagram from './../assets/img/nav-icon3.svg';
import bars from './../assets/img/bars.png';



const Navbar = () => {
 const [navbar, setNavbar] = useState(false)
 const[isOpened, setIsOpened] = useState(false)

  const changeBackground = () => {
  	if (window.scrollY >= 10){
  		setNavbar(true)
  	} else {
  		setNavbar(false)
  	}
  }
  window.addEventListener('scroll', changeBackground)

	return(
		<>
		<nav  className={navbar ? 'navbar down' : 'navbar'}>

		<div className='logo-container'>
			<a href="">
					<img src={logo} alt="logo" className='logo' />
			</a>
		</div>


			<div className={`container-nav-detail ${isOpened ? 'active' : 'none'}  `} 
			    onClick={()=> setIsOpened(false)}>

				<div className='link-direction'>
					<a href="#home">Home</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
				</div>
				
					<div className='socialMedia-container'>

          <div className='icon-container-menu'>
            <a href="#"><img src={linkedin} alt="linkedin" className='icon-socialMedia-links' /></a>
          </div>
          <div className='icon-container-menu'>
            <a href="#"><img src={facebook} alt="facebook" className='icon-socialMedia-links' /></a>
          </div>
           <div className='icon-container-menu'>
            <a href="#"><img src={instagram} alt="instagram" className='icon-socialMedia-links' /></a>
          </div>
          
        </div>
				<button className='btn-navbar'>Let's Connect</button>
			
				
			</div>


     <img src={bars} className='bars' onClick={()=> setIsOpened(true)} />


		</nav>
		</>
		)
}

export default Navbar;