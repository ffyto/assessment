import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';
import { getProducts } from '../../services/products';
import NavBar from '../../components/navBar';

function HomePage() {
	const [products, setProducs] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await getProducts();
			setProducs(result);
		};
		fetchData();
	}, []);
	return (
		<div>
			<NavBar />
			<h1>Products</h1>
			<div className='home'>
				{products.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
