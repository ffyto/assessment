import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getProduct from '../../services/products';

function ProductDetail() {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const result = await getProduct(id);
			setProduct(result);
		};
		fetchData();
	}, []);
	return (
		<div>
			<img src={product.image} alt='' />
			<h1>{`Name: ${product.title}`}</h1>
			<h2>{`Status: ${product.price}`}</h2>
			<h2>{`Species: ${product.description}`}</h2>
		</div>
	);
}

export default ProductDetail;
