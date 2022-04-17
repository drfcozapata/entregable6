import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductThunk } from '../redux/actions';

const ProductDetail = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductThunk());
	}, [dispatch]);

	return (
		<div>
			<h2>Product Detail</h2>
		</div>
	);
};

export default ProductDetail;
