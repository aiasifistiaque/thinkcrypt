import { heroData } from '../../data';
import React from 'react';
import Image from 'next/image';

const Slider = ({ i }) => {
	return (
		<div class='slider'>
			<div className='home-top-texts'>
				<h3>{heroData[i].title}</h3>
				<p>{heroData[i].data}</p>
				<div className='slider-quote-button'>
					<p>Get Quote</p>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignSelf: 'flex-end',
					marginBottom: '5%',
				}}>
				<Image
					src={heroData[i].src}
					alt='Picture of the author'
					width={600}
					height={300}
				/>
			</div>
		</div>
	);
};

export const SliderOne = () => {
	const i = 0;
	return <Slider i={0} />;
};

export const SliderTwo = () => {
	return <Slider i={1} />;
};

export const SliderThree = () => {
	return <Slider i={2} />;
};
