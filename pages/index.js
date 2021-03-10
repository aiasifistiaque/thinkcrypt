import Head from 'next/head';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTop from '../components/HomeTop';
import DevServices from '../components/DevServices';
import ValueBox from '../components/ValueBox';
import Footer from '../components/Footer';
import JourneySection from '../components/JourneySection';
import FooterDivider from '../components/FooterDivider';

export default function Home() {
	return (
		<div className='home-top-background'>
			<Head>
				<title>thinkCrypt</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<HomeTop />
			<JourneySection />
			<ValueBox />
			<DevServices />
			<FooterDivider />
			<Footer />
		</div>
	);
}
