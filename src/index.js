import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './redux';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
