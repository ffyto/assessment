import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Timer({ time }) {
	const [timeLeft, setTimeLeft] = useState(time);
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft - minutes * 60;

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timeLeft >= 1) {
				setTimeLeft(timeLeft - 1);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timeLeft]);
	return (
		<div>
			<span className='timer'>
				Deal expires in: 0{minutes}:{seconds >= 10 ? seconds : `0${seconds}`}
			</span>
		</div>
	);
}
export default Timer;

Timer.propTypes = {
	time: PropTypes.number.isRequired,
};
