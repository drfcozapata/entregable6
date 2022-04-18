import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, LoadingScreen, NavBar } from './components';
import { Home, ProductDetail, Purchases } from './Pages';

function App() {
	const isLoading = useSelector(state => state.isLoading);

	return (
		<HashRouter>
			{isLoading && <LoadingScreen />}
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/shop/:id" element={<Purchases />} />
				<Route path="/purchases" element={<Purchases />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
}

export default App;
