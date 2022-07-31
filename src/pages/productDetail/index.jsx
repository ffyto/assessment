import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../services/products';
import NavBar from '../../components/navBar';

function ProductDetail() {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const result = await getProduct(id);
			setProduct(result);
		};
		fetchData();
	}, [product]);
	return (
		<div className='detail'>
			<NavBar />
			<div className='detail_productCard'>
				{product.title !== undefined ? (
					<>
						<img
							src={product.image}
							alt=''
							className='detail_productCard_image'
						/>
						<h1>{`Product: ${product.title}`}</h1>
						<br />
						<h2>{`Price: $${product.price}`}</h2>
						<br />
						<br />
						<h2>{`Category: ${product.category}`}</h2>
						<br />
						<br />
						<h2>{`Description: ${product.description}`}</h2>
					</>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
}

export default ProductDetail;
