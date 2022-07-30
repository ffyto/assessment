import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DetailButton({ product }) {
	return (
		<div>
			<Link to={`/products/${product.id}`}>
				<button type='button'>Go to Detail</button>
			</Link>
		</div>
	);
}

export default DetailButton;

DetailButton.propTypes = {
	product: PropTypes.shape().isRequired,
};
