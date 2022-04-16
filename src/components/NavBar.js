import React from 'react';
import '../styles/header.css';

const NavBar = () => {
	return (
		<header className="header">
			<h2>e-commerce</h2>
			<nav>
				<ul className="navegation">
					<li className="text-center">
						<h3>L</h3>
					</li>
					<li className="text-center">
						<h3>F</h3>
					</li>
					<li className="text-center">
						<h3>S</h3>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
