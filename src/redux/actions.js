import axios from 'axios';

export const actions = {
	setProducts: 'SET_PRODUCTS',
	setIsLoading: 'SET_IS_LOADING',
	setCategories: 'SET_CATEGORIES',
	setIsActive: 'SET_IS_ACTIVE',
};

export const setProducts = products => ({
	type: actions.setProducts,
	payload: products,
});

export const setIsLoading = isLoading => ({
	type: actions.setIsLoading,
	payload: isLoading,
});

export const setCategories = categories => ({
	type: actions.setCategories,
	payload: categories,
});

export const setIsActive = isActive => ({
	type: actions.setIsActive,
	payload: isActive,
});

export const getProductsThunk = () => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/')
			.then(response => dispatch(setProducts(response.data)))
			.finally(() => dispatch(setIsLoading(false)));
	};
};

export const getCategoriesThunk = () => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.get(
				'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/'
			)
			.then(response => dispatch(setCategories(response.data)))
			.finally(() => dispatch(setIsLoading(false)));
	};
};

export const filterCategoryThunk = id => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.get(
				`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`
			)
			.then(response => dispatch(setProducts(response.data)))
			.finally(() => {
				dispatch(setIsActive(true));
				dispatch(setIsLoading(false));
			});
	};
};

export const getProductThunk = id => {
	return dispatch => {
		// dispatch(setIsLoading(true));
		return (
			axios
				.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
				// .then(response => dispatch(setProducts(response.data)))
				.then(response => console.log(response.data))
		);
		// .finally(() => dispatch(setIsLoading(false)));
	};
};
