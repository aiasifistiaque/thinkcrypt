import React from 'react';
import { valueArray } from '../../data';

const CoreValues = ({ value }) => {
	return (
		<div className='core-values'>
			<h3>{valueArray[value].title}</h3>
			<p>{valueArray[value].data}</p>
		</div>
	);
};

export default CoreValues;
