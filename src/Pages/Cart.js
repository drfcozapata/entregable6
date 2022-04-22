import React from 'react';
import { Empty } from '../components';
import { ReactComponent as Trash } from '../assets/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addPurchaseThunk, deletePurchaseThunk } from '../redux/actions';
import '../styles/cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cart = useSelector(state => state.cart);

	const totalCart = [];

	cart.data?.cart.products.map(product =>
		totalCart.push(product.price * product.productsInCart?.quantity)
	);
	const total = totalCart.reduce((a, b) => a + b, 0);

	const addPurchase = () => {
		dispatch(addPurchaseThunk());
		setIsOpen(false);
		navigate('/purchases');
	};

	return (
		<div className={`cart-modal ${isOpen ? 'open' : ''}`}>
			<h3 className="purchase-title">Shopping Cart</h3>
			{cart.data?.cart.products.length > 0 ? (
				<ul className="shopping-cart">
					{cart.data?.cart.products.map(product => (
						<li className="container" key={product.id}>
							<h4>{product.title}</h4>
							<p className="brand">{product.brand}</p>
							<div className="d-flex justify-content-between align-items-center">
								<div className="d-flex gap-4">
									<p className="shopping-cart__quantity-title">
										<b>Quantity</b>:
									</p>
									<div className="shopping-cart__quantity-number">
										{product.productsInCart?.quantity}
									</div>
								</div>
								<button
									className="trash"
									onClick={() => dispatch(deletePurchaseThunk(product.id))}
								>
									<Trash />
								</button>
							</div>
							<div className="total-price">
								<p className="total">Total:</p>
								<h4>${product.price * product.productsInCart?.quantity}.00</h4>
							</div>
						</li>
					))}
				</ul>
			) : (
				<Empty />
			)}
			<div className="total-cart">
				<hr />
				<div className="total-cart">
					<p className="total-cart_total">Total:</p>
					<h3>${total}.00</h3>
				</div>
			</div>
			<button className="button-cart" onClick={addPurchase}>
				Checkout
			</button>
		</div>
	);
};

export default Cart;
