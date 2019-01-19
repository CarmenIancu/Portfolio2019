
import React from 'react';
import Card from './Card';
import projectsData from './ProjectsList';


function CardList () {
	const componentArray = projectsData.map(item => <Card key={item.id} project={item}/>)

	return (
		<div id='projects' className='f3 tc b'>
				{componentArray}
		</div>
	);
}

export default CardList;