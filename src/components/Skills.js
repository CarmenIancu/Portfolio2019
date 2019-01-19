import React from 'react';

import {FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaGithub, FaNpm} from 'react-icons/fa';

const Skills = () => {
	return (
	 <div id='skills' className='dark-gray items-center ma2 br2 pa2 dib ml3 pr2'>
      	<FaHtml5 size={70} className='pa4 shadow5 grow '/>
        <FaCss3 size={70} className='pa4 shadow5 grow' />
        <FaJs size={70} className='pa4 shadow5 grow'/>
        <FaReact size={70} className='pa4 shadow5 grow'/>
       	<FaGit size={70} className='pa4 shadow5 grow' />
        <FaGithub size={70} className='pa4 shadow5 grow'/>
        <FaNpm size={70} className='pa4 shadow5 grow' />
   </div>
        )
}

export default Skills;