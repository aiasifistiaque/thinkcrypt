import React from 'react';
import JourneySectionContainer from './journey/JourneySectionContainer';
import { journeyData } from '../data';
import Image from 'next/image';

export default function JourneySection() {
	return (
		<JourneySectionContainer
			textSection={<JourneyTextSection />}
			imageSection={<JourneyImageSection />}
		/>
	);
}

const JourneyTextSection = () => {
	return (
		<div className='journey-text-section'>
			<h3>{journeyData.title}</h3>
			{journeyData.dataArray.map((item, i) => (
				<p key={i}>{item.data}</p>
			))}
		</div>
	);
};

const JourneyImageSection = () => {
	return (
		<div className='journey-image-section'>
			<Image
				src='/journey.png'
				alt='Picture of the thinkcrypt journey'
				width={800}
				height={700}
			/>
		</div>
	);
};
