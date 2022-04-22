import React, { useState } from 'react';
import '../styles/nav-bar.css';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Archive } from '../assets/archive.svg';
import { ReactComponent as CartSvg } from '../assets/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../redux/actions';
import { Cart } from '../Pages';

const NavBar = ({ isLogin, setIsLogin, isCartOpen, setIsCartOpen }) => {
	const [isPurchasesOpen, setIsPurchasesOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const openPurchases = () => {
		if (localStorage.getItem('token') === '') {
			setIsLogin(true);
		} else {
			setIsPurchasesOpen(!isPurchasesOpen);
			navigate('/purchases');
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
						<button
							onClick={openPurchases}
							style={{ color: `${!isPurchasesOpen ? '#ccc' : '#f85555'}` }}
						>
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

			<Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
		</header>
	);
};

export default NavBar;
