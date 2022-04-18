import React, { useState } from 'react';
import '../styles/nav-bar.css';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Archive } from '../assets/archive.svg';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { ReactComponent as CircleUser } from '../assets/circle-user.svg';
import { ReactComponent as Envelope } from '../assets/envelope.svg';
import { ReactComponent as Key } from '../assets/key.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavBar = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = e => {
		e.preventDefault();
		const userCredentials = {
			email,
			password,
		};
		axios
			.post(
				'https://ecommerce-api-react.herokuapp.com/api/v1/users/login',
				userCredentials
			)
			.then(res => localStorage.setItem('token', res.data?.data.token));

		setEmail('');
		setPassword('');
		setIsLogin(false);
	};

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

			<div className="navegation-login">
				<form
					onSubmit={handleLogin}
					className={`login form-group card card-body ${isLogin ? 'open' : ''}`}
				>
					<div className="login-image">
						<CircleUser />
					</div>
					<div className="login-test">
						<p className="text-center">
							<span>Test Data</span>
						</p>
						<div className="d-flex align-items-center ml-10">
							<Envelope />
							<p>drfcozapata@gmail.com</p>
						</div>
						<div className="d-flex align-items-center ml-10">
							<Key />
							<p>pass1234</p>
						</div>
					</div>
					<input
						className="form-control"
						type="email"
						placeholder="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						className="form-control"
						type="password"
						placeholder="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button>Login</button>
					<p className="text-center login-account">
						Dont have an account? Sign Up
					</p>
				</form>
			</div>
		</header>
	);
};

export default NavBar;
