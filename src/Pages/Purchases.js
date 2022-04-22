import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/right-arrow.svg';
import { getTotalPurchasesThunk } from '../redux/actions';
import '../styles/purchases.css';

const Purchases = () => {
	const purchases = useSelector(state => state.purchases);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotalPurchasesThunk());
	}, [dispatch]);

	return (
		<div className="container purchases">
			{/* Identificación de la página y menú */}
			<div className="detail-nav">
				<Link to={'/'} style={{ textDecoration: 'none', color: '#CCC' }}>
					<h4>Home</h4>
				</Link>
				<span className="detail-nav__arrow">
					<RightArrow />
				</span>
				<h4>Purchases</h4>
			</div>

			<h2 className="purchases-title">My Purchases</h2>

			<ul className="purchases-container">
				{purchases.data?.purchases.map(purchase => (
					<li className="purchase-item" key={purchase.cartId}>
						<div className="card">
							<h3 className="card-header">{purchase.createdAt.slice(0, 10)}</h3>
							<div className="card-body">
								<ul className="products-purchases">
									{purchase.cart?.products.map(product => (
										<li className="purchase-product-info" key={product.id}>
											<h4>{product.title}</h4>
											<div className="purchase-quantity">
												{product.productsInCart?.quantity}
											</div>
											<h4 className="total-price">
												<span>Total: </span>$
												{product.price * product.productsInCart?.quantity}
											</h4>
										</li>
									))}
								</ul>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Purchases;
