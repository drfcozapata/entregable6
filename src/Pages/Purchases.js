import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Empty } from '../components';
import { ReactComponent as Trash } from '../assets/trash.svg';
import '../styles/purchases.css';

const Purchases = ({ isOpen }) => {
	const [shoppingCart, setShoppingCart] = useState([]);
	const purchases = useSelector(state => state.purchases);

	useEffect(() => {
		setShoppingCart(purchases.data?.cart.products);
	}, [purchases.data, isOpen]);
	console.log(shoppingCart);

	return (
		<div className={`purchases-modal ${isOpen ? 'open' : ''}`}>
			<h3 className="purchase-title">Shopping Cart</h3>
			{shoppingCart.length > 0 ? (
				<ul className="shopping-cart">
					{shoppingCart.map(product => (
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
								<button className="trash">
									<Trash />
								</button>
							</div>
							<div className="total-price">
								<p className="total">Total:</p>
								<h4>${product.price * product.productsInCart?.quantity}</h4>
							</div>
						</li>
					))}
				</ul>
			) : (
				<Empty />
			)}
			<div className="total-purchases"></div>
		</div>
	);
};

export default Purchases;
