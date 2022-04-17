import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, LoadingScreen, NavBar } from './components';
import { Home, ProductDetail, Shop } from './Pages';

function App() {
	const isLoading = useSelector(state => state.isLoading);

	return (
		<HashRouter>
			{isLoading && <LoadingScreen />}
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/shop/:id" element={<Shop />} />
				<Route path="/purchases" element={<Shop />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
}

export default App;
