import React, { useState } from 'react';
import '../styles/nav-bar.css';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Archive } from '../assets/archive.svg';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const NavBar = () => {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<header className="header">
			<Link to={'/'} style={{ textDecoration: 'none' }}>
				<h2>e-commerce</h2>
			</Link>
			<nav className="header-nav">
				<ul className="navegation">
					<li className="text-center">
						<button
							onClick={() => setIsLogin(!isLogin)}
							style={{ color: `${!isLogin ? '#ccc' : '#f85555'}` }}
						>
							<User />
						</button>
					</li>
					<li className="text-center">
						<button style={{ color: '#ccc' }}>
							<Archive />
						</button>
					</li>
					<li className="text-center">
						<button style={{ color: '#ccc' }}>
							<Cart />
						</button>
					</li>
				</ul>
			</nav>

			<LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
		</header>
	);
};

export default NavBar;
