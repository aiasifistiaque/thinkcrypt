import React, { useState, useEffect } from 'react';
import { SliderOne, SliderThree, SliderTwo } from './sliders/Sliders';

export default function HomeTop() {
	const [carPos, setCarPos] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCarPos(carPos => (carPos + 1) % 3);
			console.log(carPos);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='home-top-text-container'>
			<div className='car-button-container'>
				<CarButtons
					active={carPos == 0 ? true : false}
					onPress={() => setCarPos(0)}
				/>
				<CarButtons
					active={carPos == 1 ? true : false}
					pos={carPos}
					onPress={() => setCarPos(1)}
				/>
				<CarButtons
					active={carPos == 2 ? true : false}
					pos={carPos}
					onPress={() => setCarPos(2)}
				/>
			</div>
			{carPos == 0 ? (
				<SliderOne />
			) : carPos == 1 ? (
				<SliderTwo />
			) : (
				<SliderThree />
			)}
		</div>
	);
}

const CarButtons = ({ children, onPress, active }) => {
	return (
		<div
			onClick={onPress}
			className='car-buttons'
			style={{
				backgroundColor: active ? 'rgba(0,0,0,.6)' : 'white',
				border: '1px solid white',
			}}>
			{children}
		</div>
	);
};
