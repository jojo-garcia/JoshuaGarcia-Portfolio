import { Link } from "react-router-dom"

export default function Header() {
	return (
		<header>
			<Link to="/">Home</Link>{' '}
			<Link to="/Entries">Entries</Link>{' '}
			<Link to="/About">About</Link>
		</header>
	);
}