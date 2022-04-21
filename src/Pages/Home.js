import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterCategoryThunk,
	filterNameThunk,
	getCategoriesThunk,
	getProductsThunk,
} from '../redux/actions';
import '../styles/home.css';
import { ReactComponent as GlassSearch } from '../assets/glass-search.svg';
import Empty from '../components/Empty';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const categories = useSelector(state => state.categories);
	const [searchProduct, setSearchProduct] = React.useState('');

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
					<div className="accordion" id="accordionOne">
						<div className="accordion-item filter-price">
							<h2 className="accordion-header" id="headingOne">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<h3>Price</h3>
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								aria-labelledby="headingOne"
							>
								<div className="accordion-body">
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
							</div>
						</div>
					</div>
					<div className="accordion" id="accordionTwo">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingTwo">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="true"
									aria-controls="collapseTwo"
								>
									<h3>Categories</h3>
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse show"
								aria-labelledby="headingTwo"
							>
								<div className="accordion-body filter-categories">
									<button
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
						</div>
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
										key={productsItem?.id}
										to={`/products/${productsItem?.id}`}
										style={{ textDecoration: 'none', color: '#515151' }}
									>
										<ProductCard productsItem={productsItem} />
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
