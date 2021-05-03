import React from 'react';
import Head from 'next/head';
import NavTwo from '../components/NavTwo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { portfolioDescription } from '../data';
import Image from 'next/image';

const portfolio = () => {
	return (
		<div className='page'>
			<Head>
				<title>thinkCrypt</title>
			</Head>
			<NavTwo />

			<main className='portfolio-page'>
				<h1>Our Portfolio</h1>
				<p>{portfolioDescription}</p>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</main>
		</div>
	);
};

const ProjectCard = () => {
	return (
		<div className='project-card'>
			<Image
				src='/folio.jpeg'
				alt='Picture of the author'
				width={1200}
				height={800}
			/>
			<div className='card-items'>
				<h3>Title of the project</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique
					mi at dignissim tristique. In risus massa, finibus eget vulputate at,
					ornare ut risdictumst. Morbi lacinia velit nec eros dignissim, ac
					ullamcorper dolor consequat. Nam feugiat, lorem vestibulum posuere
					viverra, velit est ornare libero, a ultricies diam erat in orci.
				</p>
				<div className='view-project-button'>
					<p>View Project</p>
				</div>
			</div>
		</div>
	);
};

export default portfolio;
