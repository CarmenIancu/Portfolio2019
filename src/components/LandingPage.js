import React from 'react';
import Navbar from './Navbar';
import Links from './Links';
import './LandingPage.css';
import ninja from '../images/ninja.png';

const LandingPage =({onClick}) => {
	return (
<article id='top' className='vh-100 w-100 flex bg-dark-gray items-center'>
  <div className=' dt tc center  white no-repeat '>
  	<img onClick={onClick} src={ninja} width={128} heigth={128} alt='ninja' style={{cursor:'pointer'}}/>
 
    <div className='dtc v-mid dark-gray'> 
    	<Navbar  />
        <Links />
    </div>
   </div>
</article>
	)
}

export default LandingPage;