import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar({ scrollTo }) {
	return (
		<Navbar expand='lg'>
			<Navbar.Brand
				href='#home'
				style={{
					color: 'white',
					paddingLeft: '1rem',
					paddingRight: '1rem',
					fontSize: 25,
				}}>
				ThinkCrypt
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav
					style={{
						flex: 1,
						justifyContent: 'flex-end',
					}}>
					<NavItem>Home</NavItem>
					<NavItem onPress={() => scrollTo('aboutus')}>About us</NavItem>
					<NavItem onPress={() => scrollTo('services')}>Services</NavItem>
					<NavItem onPress={() => scrollTo('value')}>Values</NavItem>
					<NavItem>Portfolio</NavItem>
					<NavItem>Contact us</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

const NavItem = ({ children, href, onPress }) => {
	return (
		<div className='nav-item' onClick={onPress}>
			<p href={href}>{children}</p>
		</div>
	);
};
