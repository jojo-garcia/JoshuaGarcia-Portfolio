import {useState} from 'react'
import profilePic from './assets/joshua_headshot.jpeg'
import './App.css'

export default function App() { 
    
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const projectCards = [
        {
            id:'pcard-sharelib',
            title: 'ShareLib.App',
            content: "I'm trying to build open-source library-styled booking cataloguing & lending software! Library budgets are constantly being slashed and the software is proprietary and siloed. My hope is that this software eventually allows individuals and communities to create their own library systems, even when abandoned or purposefully denied access by municipal/state/federal government.",
        },

        {
            id:'pcard-homelab',
            title: 'homelab',
            content: "Frankenstein had his monster, I have some old computers and a PS4 I'm trying to bash together to get a working multi-use home lab going.",
        },
        
        {
            id: 'project-card-secret',
            title: 'Secret Project',
            content: "A secret project that I can't wait to share someday!",
        },
    ]

    const [openSection, setOpenSection] = useState<string | null>('tech');
    
    const handleToggle = (section: string) => {
            setOpenSection(current => current === section ? null : section)
        };
    

    const nextCard = () => {
        setActiveCardIndex((prev) => (prev + 1) % projectCards.length)
    }

    const prevCard = () => {
        setActiveCardIndex((prev) => (prev - 1 + projectCards.length) % projectCards.length)
    }
    
    return(
        <div id="app-root" className='portfolio' data-theme="josh-devlog"> 
            <div className="bg-particles">
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
            </div>
        

        <header id='main-head' className='header ff7r-panel'>
            <div className='header-glow'></div>
            <div className='corner-accent top-left'></div>
            <div className='corner-accent top-right'></div>
            <div className='corner-accent bottom-left'></div>
            <div className='corner-accent bottom-right'></div>
            <div className='header-left'>
                <div className='avatar-container'></div>
                <img id='joshua-headshot' className='avatar' src={profilePic} 
                     alt="A professional headshot of Joshua looking fresh in a blue velvet blazer" />
                <div className='avatar-glow'></div>
            </div>

            <div id='header-content'>
                <a 
                    id='linkedin-link'
                    className='linkedin' 
                    href="https://www.linkedin.com/in/joshua-garcia-b74191219/"
                    target='blank'>
                <h1 id='fullname' className='realname'>Joshua T. Garcia</h1></a>
            </div>
        </header>
                   
        <main id='main-content' className="main">
            <section id='about-section' className="About">
                <div className='section-head'>
                    <div className='headline'></div>
                    <h2 id='about-header'>About Me</h2>
                    <div className='headline'></div>
                </div>
                    
                <p id='about-description'> Once a theater kid, now an aspiring Systems/Network Engineer. 
                    Currently a Technology Apprentice with i.c.stars, I'm working on expanding and refining my fundamental
                    coding skills, gaining more knowledge and experience with LLMs/A.I. systems, and studying for my Cisco Networking
                    with the eventual goal of getting my CCIE. I believe that technology should work *for* people in non-exploitative ways,
                    and any kind of project that centers the end-user as someone to be serviced rather than as the service is one I'd like to be a part of.<br/>
                </p>
                
                <p id='projects-intro'><br/>Currently I have a few projects going:</p>

                <div id="project-cards" className="card-stack-container">
                <div className="card-stack">
                {projectCards.map((card, index) => {
                    let offset = index - activeCardIndex
                    if (offset > 1) offset -= projectCards.length
                    if (offset < -1) offset += projectCards.length
                    const isActive = offset === 0
                    const isPrev = offset === -1 
                    const isNext = offset === 1

                    let transform = 'translateX(0) scale(1)'
                    let zIndex = 10
                    let opacity = 1

                    if (isPrev) {
                        transform = 'translateX(-55%) scale(0.8) rotateY(25deg)'
                        zIndex = 5
                        opacity = 0.5
                    } else if (isNext) {
                        transform = 'translateX(55%) scale(0.8) rotateY(-25deg)'
                        zIndex = 5
                        opacity = 0.5
                    } else if (!isActive) {
                        transform = 'translateX(0) scale(0.6)'
                        zIndex = 1
                        opacity = 0
                    }

                    return (
                        <div
                            key={card.id}
                            id={card.id}
                            className={`ff7r-card stack-card ${isActive ? 'active' : ''}`}
                            style={{ transform, zIndex, opacity }}
                        >
                        <div className="card-glow"></div>
                        <div className="card-corner top-left"></div>
                        <div className="card-corner top-right"></div>
                        <div className="card-corner bottom-left"></div>
                        <div className="card-corner bottom-right"></div>
                        <div className="stack-card-inner">
                            <h3 className="stack-card-title">{card.title}</h3>
                            <p className="stack-card-content">{card.content}</p>
                        </div>
                    </div>
                    )
                })}
                </div>

            <div className="card-nav">
                <button
                    className="ff7r-nav-btn"
                    onClick={prevCard}
                    aria-label="Previous project"
                >
                <span className="btn-glow"></span>
                <span className="btn-text">←</span>
                </button>
            <div className="card-indicators">
                {projectCards.map((_, index) => (
                    <span
                    key={index}
                    className={`card-indicator ${index === activeCardIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
                <button
                    className="ff7r-nav-btn"
                    onClick={nextCard}
                    aria-label="Next project"
                >
                <span className="btn-glow"></span>
                <span className="btn-text">→</span>
              </button>
            </div>
        </div>    
        </section>
                
        <section id='skills-section' className="Skills">
            <div className='section-head'>
                <div className='headline'></div>
                <h2 id='skills-header'>Skills</h2>
                <div className='headline'></div>
            </div> 
                
            <div id='skills-accordion' className='ff7r-accordion'>
                <div id='skill-group-tech' className='ff7r-accordion-item' onClick={() => handleToggle('tech')}>
                    <div className='ff7r-accordion-head'>
                            <span className='accordion-glow'></span>
                            <span className='accordion-icon'>◆</span>
                            <span className='accordion-title'>Technical Skills</span>
                            <span className='accordion-arrow' style={{
                                transform: openSection === 'tech' ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s ease' 
                            }}>▼</span>
                        </div>
                        
                    {openSection === 'tech' && (
                    <div className="ff7r-accordion-content">
                        <div className="content-glow"></div>
                            <ul id="technical-skills-list" className="skills-list">
                                <li><span className="skill-bullet">▸</span> HTML</li>
                                <li><span className="skill-bullet">▸</span> CSS</li>
                                <li><span className="skill-bullet">▸</span> JavaScript</li>
                                <li><span className="skill-bullet">▸</span> SQL</li>
                                <li><span className="skill-bullet">▸</span> Linux, Windows, MacOS Literacy</li>
                                <li><span className="skill-bullet">▸</span> Hardware Diagnostic and Repair</li>
                            </ul>
                        </div>
                    )}
                    </div>

                <div id="skill-group-creative" className="ff7r-accordion-item">
                        <div className="ff7r-accordion-head" onClick={() => handleToggle('creative')}>
                            <span className="accordion-glow"></span>
                            <span className="accordion-icon">◆</span>
                            <span className="accordion-title">Creative Skills</span>
                            <span className='accordion-arrow' style={{
                                transform: openSection === 'creative' ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s ease' 
                            }}>▼</span>
                        </div>

                {openSection === 'creative' && (
                <div className="ff7r-accordion-content">
                    <div className="content-glow"></div>
                        <ul id="creative-skills-list" className="skills-list">
                            <li><span className="skill-bullet">▸</span> Dancing</li>
                            <li><span className="skill-bullet">▸</span> Painting</li>
                        </ul>
                    </div>
                    )}
                </div>

                <div id="skill-group-personal" className="ff7r-accordion-item" onClick={() => handleToggle('personal')}>
                        <div className="ff7r-accordion-head">
                            <span className="accordion-glow"></span>
                            <span className="accordion-icon">◆</span>
                            <span className="accordion-title">Personal Interests</span>
                            <span className='accordion-arrow' style={{
                                transform: openSection === 'personal' ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s ease' 
                            }}>▼</span>
                        </div>

                {openSection === 'personal' && (
                <div className="ff7r-accordion-content">
                    <div className="content-glow"></div>
                        <ul id="personal-skills-list" className="skills-list">
                            <li><span className="skill-bullet">▸</span> Gaming</li>
                            <li><span className="skill-bullet">▸</span> Reading</li>
                            <li><span className="skill-bullet">▸</span> Music</li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}