import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { filterCategoryThunk, getProductsThunk } from '../redux/actions';
import '../styles/product-details.css';
import { ReactComponent as RightArrow } from '../assets/right-arrow.svg';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/chevron-right.svg';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);

	useEffect(() => {
		dispatch(getProductsThunk());
	}, [dispatch]);

	const productsFound = products.data?.products.find(
		productItem => productItem.id === Number(id)
	);

	const categoryId = productsFound?.category.id;
	useEffect(() => {
		dispatch(filterCategoryThunk(categoryId));
	}, [dispatch, categoryId]);

	const categoryFound = products.data?.products.filter(
		productItem => productItem.id !== productsFound?.id
	);
	console.log(categoryFound);

	return (
		<div className="container details">
			{/* Identificación de la página y menú */}
			<div className="detail-nav">
				<Link to={'/'} style={{ textDecoration: 'none', color: '#CCC' }}>
					<h4>Home</h4>
				</Link>{' '}
				<span className="detail-nav__arrow">
					<RightArrow />
				</span>
				<h4>{productsFound?.title}</h4>
			</div>

			{/* Detalles del producto */}
			<main className="product-details">
				<div className="images">
					<div className="slider-product">
						<button className="slider-product__arrow">
							<ChevronLeft />
						</button>
						<img
							className="detail-img"
							src={productsFound?.productImgs[0]}
							alt={`${productsFound?.title} 1`}
						/>
						<button className="slider-product__arrow">
							<ChevronRight />
						</button>
					</div>
					<div className="thumb-slide">
						{productsFound?.productImgs.map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`${productsFound?.title} ${index + 1}`}
							/>
						))}
					</div>
				</div>
				<div className="description">
					<h2>{productsFound?.title}</h2>
					<p className="info">{productsFound?.description}</p>
					<div className="description-info">
						<div>
							<p className="price-detail">Price</p>
							<h2>${productsFound?.price}</h2>
						</div>
						<div>
							<p className="price-detail">Quantity</p>
							<div className="quantity-counter">
								<button className="quantity-btn">-</button>
								<h3 className="quantity-value" type="number">
									1
								</h3>
								<button className="quantity-btn">+</button>
							</div>
						</div>
					</div>
					<button className="button-add-cart">Add to cart</button>
				</div>
			</main>

			<div className="detail-similars">
				<h3 className="title-similars">
					<span>Discover similar items</span>
				</h3>
				<ul className="products-cards-detail">
					{categoryFound?.map(product => (
						<li key={product.id}>
							<Link
								to={`/products/${product.id}`}
								style={{ textDecoration: 'none', color: '#515151' }}
							>
								<ProductCard productsItem={product} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductDetail;
