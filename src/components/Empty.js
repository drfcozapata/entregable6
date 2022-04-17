import React from 'react';
import EmptyBox from '../assets/empty-box.png';
import '../styles/empty.css';

const Empty = () => {
	return (
		<div className="empty">
			<img src={EmptyBox} alt="Empty Box" />
			<h3>No products found!</h3>
		</div>
	);
};

export default Empty;
