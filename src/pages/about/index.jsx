import NavBar from '../../components/navBar';

function About() {
	return (
		<div>
			<NavBar />
			<div className='about_container'>
				<img
					src='../../assets/perfil.png'
					alt='Web Designer Profile pic'
					className='about_image'
				/>
				<h1>Name: Carlos Mauricio Arango</h1>
				<h2>
					Description: Teacher of Mathematics and Physics. Passionate about
					technology. Web Development student and future developer.
				</h2>
				<ul>
					<h2>List of three things I have learned in the program:</h2>
					<li>
						<h3>
							Concepts from basic to advanced in html, css and javascript.
						</h3>
					</li>
					<li>
						<h3>How to make my first web page.</h3>
					</li>
					<li>
						<h3>How to use react to create my first web application.</h3>
					</li>
				</ul>
				<h2>Email: cmauricio.arango@gmail.com</h2>
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
