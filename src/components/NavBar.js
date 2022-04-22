import React, { useState } from 'react';
import '../styles/nav-bar.css';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Archive } from '../assets/archive.svg';
import { ReactComponent as CartSvg } from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../redux/actions';
import { Cart } from '../Pages';

const NavBar = ({ isLogin, setIsLogin }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const dispatch = useDispatch();

	const openCart = () => {
		if (localStorage.getItem('token') === '') {
			setIsLogin(true);
		} else {
			setIsCartOpen(!isCartOpen);
			if (isCartOpen !== true) {
				dispatch(getCartThunk());
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
							onClick={openCart}
							style={{ color: `${!isCartOpen ? '#ccc' : '#f85555'}` }}
						>
							<CartSvg />
						</button>
					</li>
				</ul>
			</nav>

			<LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />

			<Cart isOpen={isCartOpen} />
		</header>
	);
};

export default NavBar;
