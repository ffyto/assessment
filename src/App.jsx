import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProductDetail from './pages/productDetail';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products/:id' element={<ProductDetail />} />
				{/* <Route path='/register' element={<About />} />
				<Route path='*' element={<Error404 />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
