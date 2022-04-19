import axios from 'axios';

export const actions = {
	setProducts: 'SET_PRODUCTS',
	setIsLoading: 'SET_IS_LOADING',
	setCategories: 'SET_CATEGORIES',
	setPurchases: 'SET_PURCHASES',
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

export const setPurchases = purchases => ({
	type: actions.setPurchases,
	payload: purchases,
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
				dispatch(setIsLoading(false));
			});
	};
};

export const filterNameThunk = name => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.get(
				`https://ecommerce-api-react.herokuapp.com/api/v1/products/?query=${name}`
			)
			.then(response => dispatch(setProducts(response.data)))
			.finally(() => {
				dispatch(setIsLoading(false));
			});
	};
};

export const loginThunk = userCredentials => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.post(
				'https://ecommerce-api-react.herokuapp.com/api/v1/users/login/',
				userCredentials
			)
			.finally(() => dispatch(setIsLoading(false)));
	};
};

const getConfig = () => ({
	headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const addProductThunk = newProduct => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.post(
				'https://ecommerce-api-react.herokuapp.com/api/v1/cart',
				newProduct,
				getConfig()
			)
			.then(response => {
				console.log(response.data);
			})
			.catch(error => console.log(error))
			.finally(() => dispatch(setIsLoading(false)));
	};
};

export const getPurchasesThunk = () => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return axios
			.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
			.then(response => {
				dispatch(setPurchases(response.data));
			})
			.catch(error => {
				if (error.response.status === 404) {
					dispatch(setPurchases([]));
				}
			})
			.finally(() => dispatch(setIsLoading(false)));
	};
};
