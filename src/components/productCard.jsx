import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
	return (
		<div className='home_productCard'>
			<img src={product.image} alt='' className='home_productCard_image' />
			<h2>{product.title}</h2>
			<Link
				to={`/products/${product.id}`}
				rel='nofollow noopener noreferrer'
				target='_blank'
			>
				<button type='button' className=''>
					Go to Detail
				</button>
			</Link>
		</div>
	);
}

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.shape().isRequired,
};
