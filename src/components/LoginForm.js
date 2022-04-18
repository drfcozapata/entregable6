import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as CircleUser } from '../assets/circle-user.svg';
import { ReactComponent as Envelope } from '../assets/envelope.svg';
import { ReactComponent as Key } from '../assets/key.svg';
import { loginThunk } from '../redux/actions';
import '../styles/login-form.css';

const LoginForm = ({ isLogin, setIsLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const dispatch = useDispatch();

	const handleLogin = e => {
		e.preventDefault();
		const userCredentials = {
			email,
			password,
		};
		dispatch(loginThunk(userCredentials)).then(res => {
			const user = `${res.data?.data.user.firstName} ${res.data?.data.user.lastName}`;
			setUserName(user);
			localStorage.setItem('token', res.data?.data.token);
			localStorage.setItem('userName', user);
		});

		setEmail('');
		setPassword('');
		setIsLogin(false);
	};

	return (
		<div className="navegation-login">
			<form
				onSubmit={handleLogin}
				className={`login form-group card card-body ${isLogin ? 'open' : ''}`}
			>
				{localStorage.getItem('token') ? (
					<>
						<div className="login-image">
							<CircleUser />
						</div>
						<h3 className="text-center mb-4">{userName}</h3>
						<button onClick={() => localStorage.setItem('token', '')}>
							Log out
						</button>
					</>
				) : (
					<>
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
						<button className="btn btn-danger">Login</button>
						<p className="text-center login-account">
							Dont have an account? Sign Up
						</p>
					</>
				)}
			</form>
		</div>
	);
};

export default LoginForm;
