import React from 'react';
import {IoIosMail} from 'react-icons/io';
import ninja from '../images/ninja.png';

const Contact = () => {
	return (
		<div id='contact' className='f4 dark-gray items-center  pa3 br2'>
			<img className='br-pill fc grow' height={100} width={100} src={ninja} alt='ninja'/>
			<div className='inline-flex grow'>
				<IoIosMail size={30}/>
		  		<a className='no-underline near-black ' href='mailto:carmen.iancu.mail@gmail.com'>Get in touch!</a>
			</div>
		</div>
		)
}

export default Contact;