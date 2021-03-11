import Head from 'next/head';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTop from '../components/HomeTop';
import DevServices from '../components/DevServices';
import ValueBox from '../components/ValueBox';
import Footer from '../components/Footer';
import JourneySection from '../components/JourneySection';
import FooterDivider from '../components/FooterDivider';
import { useRef } from 'react';

export default function Home() {
	const valueRef = useRef();
	const aboutUsRef = useRef();
	const servicesRef = useRef();
	const refParams = { behavior: 'smooth', block: 'start' };

	const scroll = item => {
		if (item == 'value') {
			valueRef.current.scrollIntoView(refParams);
		} else if (item == 'aboutus') {
			aboutUsRef.current.scrollIntoView(refParams);
		} else if (item == 'services') {
			servicesRef.current.scrollIntoView(refParams);
		}
	};

	return (
		<div className='home-top-background'>
			<Head>
				<title>thinkCrypt</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar scrollTo={item => scroll(item)} />
			<HomeTop />

			<div ref={aboutUsRef}>
				<JourneySection />
			</div>

			<div ref={valueRef}>
				<ValueBox />
			</div>

			<div ref={servicesRef}>
				<DevServices />
			</div>

			<FooterDivider />
			<Footer />
		</div>
	);
}
