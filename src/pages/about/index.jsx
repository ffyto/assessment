import NavBar from '../../components/navBar';

function About() {
	return (
		<div className='about'>
			<NavBar />
			<div className='about_container'>
				<div className='about_image'>
					<img
						src='./perfil.png'
						alt='Web Designer Profile pic'
						className='about_image_pic'
					/>
				</div>
				<h1>Name: Carlos Mauricio Arango</h1>
				<br />
				<h2>
					Description: Teacher of Mathematics and Physics. Passionate about
					technology. Web Development student and future developer.
				</h2>
				<br />
				<ul className='about_list'>
					<h2>List of three things I have learned in the program:</h2>
					<br />
					<li>
						<h3>
							1. Concepts from basic to advanced in html, css and javascript.
						</h3>
					</li>
					<li>
						<h3>2. How to make my first web page.</h3>
					</li>
					<li>
						<h3>3. How to use react to create my first web application.</h3>
					</li>
				</ul>
				<br />
				<h2>Email: cmauricio.arango@gmail.com</h2>
				<br />
				<h2>
					GitHub link:{' '}
					<a href='https://github.com/ffyto' target='_blank' rel='noreferrer'>
						https://github.com/ffyto
					</a>
				</h2>
			</div>
		</div>
	);
}
export default About;
