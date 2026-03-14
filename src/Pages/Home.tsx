
import {Link} from 'react-router-dom'
import About from '../Components/About'
import NewEntryForm from '../Components/NewEntryForm'

export default function Home() {
    return(
        <>
        <header id='main-head' className='header ff7r-panel'>
            <div className='header-glow' aria-hidden="true"></div>
            <div className='corner-accent top-left' aria-hidden="true"></div>
            <div className='corner-accent top-right' aria-hidden="true"></div>
            <div className='corner-accent bottom-left' aria-hidden="true"></div>
            <div className='corner-accent bottom-right' aria-hidden="true"></div>
            <div className='header-left'>
                <div className='avatar-container' aria-hidden="true"></div>
                <img id='joshua-headshot' className='avatar' src={profilePic} 
                     alt="A professional headshot of Joshua looking fresh in a blue velvet blazer" />
                <div className='avatar-glow' aria-hidden='true'></div>
            </div>

            <div id='header-content'>
                <a 
                    id='linkedin-link'
                    className='linkedin' 
                    href="https://www.linkedin.com/in/joshua-garcia-b74191219/"
                    rel="noopener noreferrer"
                    target='_blank'
                    aria-label="Joshua Garcia LinkedIn profile (opens in new tab)">
                <h1 id='fullname' className='realname'>Joshua T. Garcia</h1>
                </a>
            </div>
        </header>
        
        <About />
        </>
    )
}