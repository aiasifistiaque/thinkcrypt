import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
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
					<NavItem href='#home'>Home</NavItem>
					<NavItem href='#link'>Services</NavItem>
					<NavItem href='#link'>Portfolio</NavItem>
					<NavItem href='#link'>Contact us</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

const NavItem = ({ children, href }) => {
	return (
		<div className='nav-item'>
			<a href={href}>{children}</a>
		</div>
	);
};
