import { Link, useLocation } from "react-router-dom"
import { useState } from 'react'
import profilePic from '../assets/joshua_pro_headshot.JPG'


export default function Header() {
	const location = useLocation();
	const currentPath = location.pathname;

	//Hamburger menu state logic
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 	const closeMenu = () => setIsMenuOpen(false); 

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/Projects", label: "Projects" },
		{ path: "/Skills", label: "Skills" },
		{ path: "/Entries", label: "Devlogs" }
	];


	return (
		// Header navbar divs for CSS
		<header className="ff7-site-header">
			<div className="header-glow-top"></div>
			<div className="header-glow-bottom"></div>
			<div className="corner-accent top-left"></div>
			<div className="corner-accent top-right"></div>
			<div className="corner-accent bottom-left"></div>
			<div className="corner-accent bottom-right"></div>

			<div className="header-top">
				<div className="branding">
					<div className="profile-pic-container">
            			<img 
                			src={profilePic}
                			alt="A professional headshot of Joshua looking fresh in a blue velvet blazer"
                			width="96"
                			height="96"
            			/>
					</div>
                	<a 
                    	id='linkedin-link'
                    	className='linkedin' 
                    	href="https://www.linkedin.com/in/joshuagarcia-enby/"
                    	rel="noopener noreferrer"
                    	target='_blank'
                    	aria-label="Joshua Garcia LinkedIn profile (opens in new tab)"
					>
                		<span id='fullname' className='realname'>Joshua T. Garcia</span>
					</a>
            	</div>

				{/* Hamburger state logic + list spans for CSS */}
				<button
					className={  `hamburger ${isMenuOpen ? 'active' : ''}`}
					onClick={toggleMenu}
					aria-label="Toggle navigation menu"
					aria-expanded={isMenuOpen}
				>
					<span className="hamburger-slot"></span>
					<span className="hamburger-slot"></span>
					<span className="hamburger-slot"></span>
					<div className="button-glow"></div>
				</button>
			</div>

			{/* Hamburger list logic + spans for CSS */}
            <nav className={`nav-menu-ff7 ${isMenuOpen ? 'open' : ''}`}>
				<ul className="nav-list">
					{navLinks.map(link => (currentPath !== link.path) && (
						<li key={link.path} className="ff7-nav-slot">
							<Link 
								className="ff7-nav-head"
								to={link.path} 
								onClick={closeMenu}
							>
								{/* Nav link icon */}
								<span className="nav-icon">◆</span>
								<span className="nav-label">{link.label}</span>
								<span className="nav-arrow">▼</span>
								<div className="nav-glow"></div>
							</Link>
						</li>
					))}
				</ul>

				{/* {currentPath !== "/" && <Link to="/">Go to Home Page</Link>} <br/>
                {currentPath !== "/Entries" && <Link to="/Entries">Go to EntryCard Page</Link>} <br/>
				{currentPath !== "/About" && <Link to="/About">Go to About Page</Link>} <br/> */}
			</nav>
			{isMenuOpen && (
					<div
						className="ff7-list-overlay"
						onClick={closeMenu}
						aria-hidden="true"
					/>
				)}
	    </header>
	);
}