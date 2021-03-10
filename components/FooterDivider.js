import React from 'react';

export default function FooterDivider() {
	return (
		<div
			style={{
				display: 'flex',
				boxSizing: 'border-box',
				borderTop: '.1px solid rgba(255,255,255,.3)',
				margin: '5%',
				marginTop: 2,
				marginBottom: 2,
				borderRadius: 100,
			}}
		/>
	);
}
