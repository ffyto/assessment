import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Timer from './Timer';
import DetailButton from './DetailButton';

function ProductCard({ product }) {
	const [remainTime, setRemainTime] = useState(0);

	const passTime = Time => {
		useEffect(() => {
			setRemainTime(Time);
		}, [Time]);
	};

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
				<Timer time={Math.floor(Math.random() * 180)} passTime={passTime} />
				<DetailButton product={product} remainTime={remainTime} />
			</div>
		</div>
	);
}

export default ProductCard;
ProductCard.propTypes = {
	product: PropTypes.shape().isRequired,
};
