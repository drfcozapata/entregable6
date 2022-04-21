import React from 'react';
import { useSelector } from 'react-redux';
import { Empty } from '../components';
import { ReactComponent as Trash } from '../assets/trash.svg';
import '../styles/purchases.css';

const Purchases = ({ isOpen }) => {
	const purchases = useSelector(state => state.purchases);

	const totalPurchases = [];

	purchases.data?.cart.products.map(product =>
		totalPurchases.push(product.price * product.productsInCart?.quantity)
	);
	const total = totalPurchases.reduce((a, b) => a + b, 0);

	return (
		<div className={`purchases-modal ${isOpen ? 'open' : ''}`}>
			<h3 className="purchase-title">Shopping Cart</h3>
			{purchases.data?.cart.products.length > 0 ? (
				<ul className="shopping-cart">
					{purchases.data?.cart.products.map(product => (
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
								<h4>${product.price * product.productsInCart?.quantity}.00</h4>
							</div>
						</li>
					))}
				</ul>
			) : (
				<Empty />
			)}
			<div className="total-purchases">
				<hr />
				<div className="total-purchase">
					<p className="total-purchase_total">Total:</p>
					<h3>${total}.00</h3>
				</div>
			</div>
		</div>
	);
};

export default Purchases;
