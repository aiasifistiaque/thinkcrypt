import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function NavTwo() {
	return (
		<Navbar expand='lg'>
			<Navbar.Brand
				style={{
					color: 'rgba(0,0,0,.6)',
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
					<NavItem href='/'>Home</NavItem>
					<NavItem>Portfolio</NavItem>
					<NavItem>Contact us</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

const NavItem = ({ children, href, onPress }) => {
	if (href)
		return (
			<Link href={href}>
				<div className='nav-item-two'>
					<p>{children}</p>
				</div>
			</Link>
		);
	else
		return (
			<div className='nav-item-two' onClick={onPress}>
				<p>{children}</p>
			</div>
		);
};
