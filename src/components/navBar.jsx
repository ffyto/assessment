import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className='header__nav'>
			<NavLink to='/'>
				<button type='button'>Home</button>
			</NavLink>
			<NavLink to='/about'>
				<button type='button'>About</button>
			</NavLink>
		</nav>
	);
}

export default NavBar;
