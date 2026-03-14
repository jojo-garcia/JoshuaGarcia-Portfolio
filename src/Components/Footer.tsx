import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<footer>
			<Link to="/">Home</Link>{' '}
			<Link to="/Entries">Entries</Link>{' '}
			<Link to="/About">About</Link>
		</footer>
	);
}