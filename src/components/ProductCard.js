import React from 'react';
import { ReactComponent as Cart } from '../assets/cart3.svg';
import '../styles/product-card.css';

const ProductCard = ({ productsItem }) => {
	return (
		<>
			<li className="card">
				<div className="product-card card-header">
					<figure>
						<div className="mt-3 mb-3 hover-animation">
							<img
								className="img-back"
								src={productsItem.productImgs[1]}
								alt="Imagen de {productsItem.title}"
							/>
							<img
								className="img-front"
								src={productsItem.productImgs[0]}
								alt="Imagen de {productsItem.title}"
							/>
						</div>
					</figure>
				</div>
				<div className="card-body">
					<h4 className="card-title">{productsItem.title}</h4>
				</div>
				<div className="d-flex justify-content-between p-3">
					<h3>
						<span>Price</span> <br />${productsItem.price}
					</h3>
					<button className="button-shopping">
						<Cart style={{ width: '55px' }} />
					</button>
				</div>
			</li>
		</>
	);
};

export default ProductCard;
