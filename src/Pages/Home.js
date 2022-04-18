import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterCategoryThunk,
	filterNameThunk,
	getCategoriesThunk,
	getProductsThunk,
} from '../redux/actions';
import '../styles/home.css';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import { ReactComponent as GlassSearch } from '../assets/glass-search.svg';
import Empty from '../components/Empty';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const categories = useSelector(state => state.categories);
	const [searchProduct, setSearchProduct] = React.useState('');
	// const isActive = useSelector(state => state.isActive);

	useEffect(() => {
		dispatch(getProductsThunk());
		dispatch(getCategoriesThunk());
	}, [dispatch]);

	const searchProductSubmit = e => {
		e.preventDefault();
		dispatch(filterNameThunk(searchProduct));
		setSearchProduct('');
	};

	return (
		<div className="container">
			<div className="main">
				{/* Columna para filtrado de productos */}
				<div className="filter-grid">
					<div className="filter-price">
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
					<div className="filter-categories">
						<div className="title">
							<h3>Categories</h3>
							<UpArrow />
						</div>
						<button
							// disabled={!isActive ? true : false}
							// className={`button-category ${!isActive ? 'active' : ''}`}
							className="button-category active"
							onClick={() => {
								dispatch(getProductsThunk());
							}}
						>
							All
						</button>
						{categories &&
							categories.data?.categories.map(category => (
								<button
									// disabled={isActive ? true : false}
									// className={`button-category ${isActive ? 'active' : ''}`}
									className="button-category"
									key={category.id}
									onClick={() => {
										dispatch(filterCategoryThunk(category.id));
									}}
								>
									{category.name}
								</button>
							))}
					</div>
				</div>

				{/* Columna para presentación de los productos */}
				<div className="products-grid">
					{/* Búsqueda por nombre */}
					<form
						className="form-group d-flex justify-content-center form-search"
						onSubmit={searchProductSubmit}
					>
						<input
							className="form-control w-75"
							type="text"
							value={searchProduct}
							onChange={e => setSearchProduct(e.target.value)}
						/>
						<button className="button-search" placeholder="">
							<GlassSearch />
						</button>
					</form>

					{/* Tarjetas de productos */}
					<div>
						{products && products.data?.products.length > 0 ? (
							<ul className="products-cards">
								{products.data?.products.map(productsItem => (
									<Link
										to={`/products/${productsItem?.id}`}
										style={{ textDecoration: 'none', color: '#515151' }}
									>
										<ProductCard
											key={productsItem?.id}
											productsItem={productsItem}
										/>
									</Link>
								))}
							</ul>
						) : (
							<div className="empty">
								<Empty />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
