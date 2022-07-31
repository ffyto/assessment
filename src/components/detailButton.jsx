import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DetailButton({ product, remainTime }) {
	return (
		<div>
			{remainTime > 0 ? (
				<Link to={`/products/${product.id}`}>
					<button type='button'>Go to Detail</button>
				</Link>
			) : (
				<span>Not Available</span>
			)}
		</div>
	);
}

export default DetailButton;

DetailButton.propTypes = {
	product: PropTypes.shape.isRequired,
};

DetailButton.propTypes = {
	remainTime: PropTypes.number.isRequired,
};
