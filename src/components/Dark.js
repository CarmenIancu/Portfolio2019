import React from 'react';
import LandingPage from './LandingPage';
import Skills from './Skills';
import CardList from './CardList';
import Contact from './Contact';
import Footer from './Footer';
import ScrollUpButton from 'react-scroll-up-button';



const Dark = ({onClick})  => {
	return (
    <div>
       <LandingPage onClick={onClick} />
       <Skills />
       <CardList />
       <Contact />
       <Footer />
       <ScrollUpButton />
       </div>
		)
}

export default Dark;