import React from 'react';

export default function DevServices() {
	return (
		<div className='app-dev-service-page'>
			<ServiceBox>
				<h3>Our App Development Services</h3>

				<ServiceCardContainer>
					<ServiceCard header='Custom App Development'>
						As an app development company, we provide customized app development
						services that leverage modern technologies, Android SDKs, and
						development trends.
					</ServiceCard>
					<ServiceCard header='UI and UX Design for  Applications'>
						Our team of Android UI and UX designers are renowned for delivering
						top-notch design using modern techniques to create a highly
						interactive User Interface and provides seamless user experience for
						users.
					</ServiceCard>
					<ServiceCard header='Application Testing'>
						Our Quality Assurance and Operations teams run regular tests to
						identify and fix problems that can affect your android and IOS apps.
						If your app is already built and facing problems, we can review and
						test it for you.
					</ServiceCard>
				</ServiceCardContainer>
			</ServiceBox>
		</div>
	);
}

const ServiceCard = ({ header, children }) => {
	return (
		<div className='service-card'>
			<h4>{header}</h4>
			<p>{children}</p>
		</div>
	);
};

const ServiceCardContainer = ({ children }) => {
	return <div className='service-card-container'>{children}</div>;
};

const ServiceBox = ({ children }) => {
	return <div className='service-box'>{children}</div>;
};
