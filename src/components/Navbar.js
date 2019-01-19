import React from 'react';

const Navbar =() => {
	return (
<nav id='navbar' className='dt w-100 border-box pa3 ph5-ns'>
    <div className='dtc v-mid w-75 tr'>
    <a className='no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2 link dim dark-gray dib f6 ml3 pr2' href='#skills' title='Skills'>Skills and Tools</a>
    <a className='no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2 link dim dark-gray dib f6 ml3 pr2' href='#projects' title='Projects'>Projects</a>
    <a className='no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2 link dim dark-gray dib f6 ml3 pr2' href='#contact' title='Contact'>Contact</a>
  </div>
</nav>


		)
}

export default Navbar;