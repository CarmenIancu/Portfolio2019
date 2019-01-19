import React from 'react';
import geisha from '../images/geisha.png';
import Intro from './Intro';


const Light = ({onClick}) => {
	return (
	<article className='flex vh-100 w-100 items-center'>
  		<div className=' dt tc center  white no-repeat '>
  			<img onClick={onClick} src={geisha} width={300} heigth={300} alt='ninja' style={{cursor:'pointer'}}/>
	   </div>
	    <div className='dtc v-mid dark-gray'> 
	   	<Intro />
	   </div>
    </article>

		)
}

export default Light;

