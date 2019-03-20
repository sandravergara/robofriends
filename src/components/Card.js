import React from 'react';

const Card = ({ name, spell, id }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='wizards' src={`https://robohash.org/${id}?200x200`}/>

			<div>
			<h2 className='f1'>{name}</h2>
			<p>{spell}</p>
			</div> 
		</div>
		);
}

export default Card;