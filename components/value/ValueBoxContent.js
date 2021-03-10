import React, { useState } from 'react';
import CoreValues from './CoreValues';
import ValueButtons from './ValueButtons';

const ValueBoxContent = () => {
	const [value, setValue] = useState(0);

	return (
		<div className='value-box-content'>
			<h2>Values That Drive Success</h2>
			<ValueMainContainer>
				<ValueButtons onPress={value => setValue(value)} />
				<CoreValues value={value} />
			</ValueMainContainer>
		</div>
	);
};

const ValueMainContainer = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,

				boxSizing: 'border-box',
				//maxWidth: '60vw',
				//width: '100vw',
			}}>
			{children}
		</div>
	);
};

export default ValueBoxContent;
