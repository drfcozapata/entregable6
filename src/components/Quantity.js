import React from 'react';
import '../styles/quantity.css';

const Quantity = ({ quantity, setQuantity }) => {
	return (
		<div className="quantity">
			<button
				className="quantity-btn"
				disabled={quantity === 1}
				onClick={() => setQuantity(quantity - 1)}
			>
				-
			</button>
			<h3 className="quantity-value">{quantity}</h3>
			<button
				className="quantity-btn"
				onClick={() => setQuantity(quantity + 1)}
			>
				+
			</button>
		</div>
	);
};

export default Quantity;
