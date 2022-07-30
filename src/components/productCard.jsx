import PropTypes from 'prop-types';
import Timer from './timer';
import DetailButton from './detailButton';

function ProductCard({ product }) {
	return (
		<div className='home_productCard'>
			<img src={product.image} alt='' className='home_productCard_image' />
			<br />
			<br />
			<h2>{product.title}</h2>
			<br />
			<h2>{`Price: $${product.price}`}</h2>
			<br />
			<div className='productCard_footer'>
				<Timer time={Math.floor(Math.random() * 180)} />
				<DetailButton product={product} />
			</div>
		</div>
	);
}

export default ProductCard;
ProductCard.propTypes = {
	product: PropTypes.shape().isRequired,
};
