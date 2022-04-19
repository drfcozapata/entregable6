import React, { useState } from 'react';
import '../styles/nav-bar.css';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Archive } from '../assets/archive.svg';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Purchases } from '../Pages';
import { useDispatch } from 'react-redux';
import { getPurchasesThunk } from '../redux/actions';

const NavBar = ({ isLogin, setIsLogin }) => {
	const [isPurchasesOpen, setIsPurchasesOpen] = useState(false);
	const dispatch = useDispatch();

	const openPurchases = () => {
		if (localStorage.getItem('token') === '') {
			setIsLogin(true);
		} else {
			setIsPurchasesOpen(!isPurchasesOpen);
			if (isPurchasesOpen !== true) {
				dispatch(getPurchasesThunk());
			}
		}
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
						<button
							onClick={openPurchases}
							style={{ color: `${!isPurchasesOpen ? '#ccc' : '#f85555'}` }}
						>
							<Cart />
						</button>
					</li>
				</ul>
			</nav>

			<LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />

			{/* <Purchases isOpen={isPurchasesOpen} /> */}
		</header>
	);
};

export default NavBar;
