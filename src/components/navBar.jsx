import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<div className='header__nav'>
			<span className='header__nav__title'>
				<strong>Fake Store</strong>
				<img src='./logo192.png' alt='' className='nav-logo' />
			</span>
			<nav className='header__nav__buttons'>
				<NavLink to='/'>
					<button type='button'>Home</button>
				</NavLink>
				<NavLink to='/about'>
					<button type='button'>About</button>
				</NavLink>
			</nav>
		</div>
	);
}

export default NavBar;
