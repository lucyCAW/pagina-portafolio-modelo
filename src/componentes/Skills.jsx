import React,{useState} from 'react'
import '../hojas-de-estilo/Skills.css'
import {plans} from './Plans'
import arrowRight from './../assets/img/arrow1.svg';
import arrowLeft from './../assets/img/arrow2.svg';


const Skills = () => {
const [selected, setSelected] = useState(0);
const tLength = plans.length;


	return(
        <div className='skills' id='skills'>
          <h1 className='title-skills'>Skills</h1>
          <p className='paragragh'>lorem imspu is simply textt of dummy of the printimg and typically industry lorem imspu is simply textt of dummy of the printimg and typically industry</p>

         <div className='slinder-container'>
         	<div className='card'>
         		<div className='wrap-percent'>
         			<span className='percent'>{plans[selected].percent}</span>
         		</div>
         		<h2>{plans[selected].name}</h2>
         	</div>
         	
         	<img src={arrowLeft} className='arrow-slider right'
         	          onClick={()=> { selected === 0 
       		      ? setSelected(tLength-1) 
       		      : setSelected((prev) => prev - 1) }} />

         	<img src={arrowRight} className='arrow-slider left'
         	     onClick={()=> { selected === tLength-1 
       		      ? setSelected(0) 
       		      : setSelected((prev) => prev + 1) }} />
         </div>

        </div>
		)
}

export default Skills;