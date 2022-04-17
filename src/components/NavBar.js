import React from 'react';
import '../styles/nav-bar.css';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Archive } from '../assets/archive.svg';
import { ReactComponent as Cart } from '../assets/cart.svg';

const NavBar = () => {
	return (
		<header className="header">
			<h2>e-commerce</h2>
			<nav>
				<ul className="navegation">
					<li className="text-center">
						<User />
					</li>
					<li className="text-center">
						<Archive />
					</li>
					<li className="text-center">
						<Cart />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
