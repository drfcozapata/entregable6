import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/right-arrow.svg';

const Purchases = () => {
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

			<h2>My Purchases</h2>
		</div>
	);
};

export default Purchases;
