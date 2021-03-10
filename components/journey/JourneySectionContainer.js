import React from 'react';

export default function JourneySectionContainer({ textSection, imageSection }) {
	return (
		<div className='journey-section-container'>
			<div style={{ flex: 6 }}>{textSection}</div>
			<div style={{ flex: 4 }}>{imageSection}</div>
		</div>
	);
}
