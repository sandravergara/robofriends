import React from 'react';
import Card from  './Card';

const CardList = ({ potterbots }) => {
	return (
		<div>
			{
				potterbots.map((user, i) => {
					return ( 	
						<Card 
							key={i} 
							id={potterbots[i].id} 
							name={potterbots[i].name} 
							spell={potterbots[i].spell}
						/>
		 			);
				})
			}
		</div>
	);
}

export default CardList;