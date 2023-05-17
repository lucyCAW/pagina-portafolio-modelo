import React,{useState} from 'react'
import '../hojas-de-estilo/Project.css'
import project1 from './../assets/img/project-img1.png';
import project2 from './../assets/img/project-img2.png';
import project3 from './../assets/img/project-img3.png';


const Project = () => {
	return(
        <div className='project' id='projects'>
    <h1 className='title'>Projects</h1>
    <p className='project-paragragh'>lorem ipsum is simply dummy text of th printing idea that and typeting industry lorem ipsum is simply dummy text of th printing idea that and typeting industry lorem ipsum is simply dummy text of th printing idea that and typeting industry lorem ipsum is simply dummy text of th printing idea that and typeting industry lorem ipsum</p>

    <div className='tab-1'>
    	<div className='img-container'>
    	<div className='cover'>
    		<h3>Business Startup</h3>
    		<p>Design & Developement</p>
    	</div>
    		<img src={project1} className='img-tab'/>
    	</div>
    	<div className='img-container'>
    	  <div className='cover'>
    	  	<h3>Business Startup</h3>
    		<p>Design & Developement</p>
    	  </div>
    		<img src={project2} className='img-tab'/>
    	</div>
    	<div className='img-container'>
    	   <div className='cover'>
    	   	<h3>Business Startup</h3>
    		<p>Design & Developement</p>
    	   </div>
    		<img src={project3} className='img-tab'/>
    	</div>
    	<div className='img-container'>
    	<div className='cover'>
    		<h3>Business Startup</h3>
    		<p>Design & Developement</p>
    	</div>
    		<img src={project1} className='img-tab'/>
    	</div>
    	<div className='img-container'>
    	  <div className='cover'>
    	  	<h3>Business Startup</h3>
    		<p>Design & Developement</p>
    	  </div>
    		<img src={project2} className='img-tab'/>
    	</div>
    	<div className='img-container'>
    	   <div className='cover'>
    	   	<h3>Business Startup</h3>
    		<p>Design & Developement</p>
    	   </div>
    		<img src={project3} className='img-tab'/>
    	</div>
    </div>
        </div>
		)
}

export default Project;