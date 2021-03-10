import React from 'react';
import ValueBoxImage from './value/ValueBoxImage';
import ValueBoxContent from './value/ValueBoxContent';

export default function ValueBox() {
	return (
		<ValueBoxLayout>
			<ValueBoxImage />
			<ValueBoxContent />
		</ValueBoxLayout>
	);
}

const ValueBoxLayout = ({ children }) => {
	return <div className='value-box-layout'>{children}</div>;
};
