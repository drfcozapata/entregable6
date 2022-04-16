import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterCategoryThunk,
	getCategoriesThunk,
	getProductsThunk,
} from '../redux/actions';
import '../styles/home.css';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const categories = useSelector(state => state.categories);

	useEffect(() => {
		dispatch(getProductsThunk());
		dispatch(getCategoriesThunk());
	}, [dispatch]);

	return (
		<div className="container">
			<h1 className="text-center mt-5 mb-4">Home of the Products</h1>
			<div className="main">
				<div className="categories">
					{categories &&
						categories.data?.categories.map(category => (
							<button
								key={category.id}
								onClick={() => dispatch(filterCategoryThunk(category.id))}
							>
								{category.name}
							</button>
						))}
				</div>
				<ul className="products">
					{products &&
						products.data?.products.map(productsItem => (
							<li className="card" key={productsItem.id}>
								<div className="card-header">
									<img
										className="mt-3 mb-3"
										src={productsItem.productImgs[0]}
										alt="Imagen de {productsItem.title}"
									/>
								</div>
								<div className="card-body">
									<h4>{productsItem.title}</h4>
								</div>
								<div className="d-flex justify-content-between p-3">
									<h3>
										<span>Price</span> <br />${productsItem.price}
									</h3>
									<button className="button-shopping">
										<h3>
											<i className="bi bi-cart3"></i>
										</h3>
									</button>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
