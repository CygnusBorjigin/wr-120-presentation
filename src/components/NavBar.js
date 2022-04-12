import NavButton from './buttons/NavButton.js';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
	const { pageName } = props;
	let background = "bg-gray-600";

	if (pageName === 'about') background = "bg-pink-800";
	if (pageName === 'team') background = "bg-green-700";
	if (pageName === 'story') background = "bg-red-800";

	const navigate = useNavigate();

	const toAbout = () => {
		navigate('/about');
	};

	const toHome = () => {
		navigate('/');
	};

	const toTeam = () => {
		navigate('/team');
	};

	const toStory = () => {
		navigate('/story');
	}

	return(
		<div className={`fixed top-0 h-16 w-screen ${background} grid grid-cols-5 gap-0`}>
			<NavButton text="About" page="about" func={ toAbout }/>
			<NavButton text="Team" page="about" func={ toTeam } />
			<h1 className="my-auto text-center text-3xl font-Beau-Rivage text-white hover:text-5xl" onClick={ toHome }>Uironda</h1>
			<NavButton text="Story" page="about" func={ toStory }/>
			<NavButton text="Ticket"page="about" />
		</div>
	)
}

export default NavBar;
