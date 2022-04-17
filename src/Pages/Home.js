import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterCategoryThunk,
	getCategoriesThunk,
	getProductsThunk,
} from '../redux/actions';
import '../styles/home.css';
import { ReactComponent as Cart } from '../assets/cart3.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import Empty from '../components/Empty';
import { Link } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const categories = useSelector(state => state.categories);
	const isActive = useSelector(state => state.isActive);

	useEffect(() => {
		dispatch(getProductsThunk());
		dispatch(getCategoriesThunk());
	}, [dispatch]);

	return (
		<div className="container">
			<div className="main">
				<sidebar>
					<div className="price">
						<div className="title">
							<h3>Price</h3>
							<UpArrow />
						</div>
						<form className="form-group form-price">
							<div className="form-price__filter">
								<label htmlFor="from">From:</label>
								<input type="number" className="form-control" id="from" />
							</div>
							<div className="form-price__filter">
								<label htmlFor="to">To:</label>
								<input type="number" className="form-control" id="to" />
							</div>
							<div className="form-price__buttons">
								<button className="button-reset">Reset</button>
								<button className="button-price">Filter Price</button>
							</div>
						</form>
					</div>
					<div className="categories">
						<div className="title">
							<h3>Categories</h3>
							<UpArrow />
						</div>
						<button
							disabled={!isActive ? true : false}
							className={`button-category ${!isActive ? 'active' : ''}`}
							onClick={() => {
								dispatch(getProductsThunk());
							}}
						>
							All
						</button>
						{categories &&
							categories.data?.categories.map(category => (
								<button
									disabled={isActive ? true : false}
									className={`button-category ${isActive ? 'active' : ''}`}
									key={category.id}
									onClick={() => {
										dispatch(filterCategoryThunk(category.id));
									}}
								>
									{category.name}
								</button>
							))}
					</div>
				</sidebar>
				<div className="products">
					<form className="form-group d-flex form-search">
						<input className="form-control" type="text" />
						<button className="button-search">Search</button>
					</form>
					<ul className="products-cards">
						{products && products.data?.products.length > 0 ? (
							products.data?.products.map(productsItem => (
								<Link
									to={`/products/${productsItem.id}`}
									style={{ textDecoration: 'none', color: '#515151' }}
								>
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
												<Cart style={{ width: '55px' }} />
											</button>
										</div>
									</li>
								</Link>
							))
						) : (
							<div className="empty">
								<Empty />
							</div>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
