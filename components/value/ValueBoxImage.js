import React from 'react';
import Image from 'next/image';

export default function ValueBoxImage() {
	return (
		<div className='value-box-image'>
			<Image
				src='/valueimage.png'
				alt='Picture of the author'
				width={600}
				height={400}
			/>
		</div>
	);
}
