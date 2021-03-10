import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Image from 'next/image';

export default function HomeCarousal() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			style={{ height: '90vh', width: '100vw', height: '90vh' }}>
			<Carousel.Item style={{ backgroundColor: 'red' }}>
				<CarItem header='MOBILE APP DEVELOPMENT COMPANY' />
				<Carousel.Caption style={{ backgroundColor: 'red', flex: 1 }}>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<CarItem header='one' />
			</Carousel.Item>
			<Carousel.Item>
				<CarItem header='one' />
			</Carousel.Item>
		</Carousel>
	);
}

const CarItem = ({ header }) => {
	return (
		<div
			style={{
				flex: 1,
				backgroundImage: `url('./Home1.jpg')`,
				width: '100vw',
				height: '90vh',
				backgroundSize: 'cover',
				padding: '1rem',
			}}>
			<div
				fluid
				style={{
					flex: 1,
					alignItems: 'center',
					backgroundColor: 'teal',
					justifyContent: 'center',
					alignContent: 'center',
				}}>
				<h3>{header}</h3>
			</div>
		</div>
	);
};
