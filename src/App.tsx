import {useCallback, useState} from 'react'
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
    
    const handleAccordionKeyDown = (e: React.KeyboardEvent, section: string) => {
        if (e.key === 'Enter' || e.key === ' ')
        {
            e.preventDefault();
            handleToggle(section);
        }
    }
    const handleCardKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            prevCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        }
    }, []);

    const nextCard = () => {
        setActiveCardIndex((prev) => (prev + 1) % projectCards.length)
    }

    const prevCard = () => {
        setActiveCardIndex((prev) => (prev - 1 + projectCards.length) % projectCards.length)
    }
    
    return(
        <div id="app-root" className='portfolio' data-theme="josh-devlog"> 
            <div className="bg-particles" aria-hidden="true">
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
                <div className='particle'></div>
            </div>
        

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
                <h1 id='fullname' className='realname'>Joshua T. Garcia</h1></a>
            </div>
        </header>
                   
        <main id='main-content' className="main">
            <section id='about-section' className="About" aria-labelledby="about-header">
                <div className='section-head'>
                    <div className='headline' aria-hidden="true"></div>
                    <h2 id='about-header'>About Me</h2>
                    <div className='headline' aria-hidden="true"></div>
                </div>
                    
                <p id='about-description'> Once a theater kid, now an aspiring Systems/Network Engineer. 
                    Currently a Technology Apprentice with i.c.stars, I'm working on expanding and refining my fundamental
                    coding skills, gaining more knowledge and experience with LLMs/A.I. systems, and studying for my Cisco CCNA certificate
                    with the eventual goal of getting my CCIE. I believe that technology should work *for* people in non-exploitative ways,
                    and any kind of project that centers the end-user as someone to be serviced rather than as the service is one I'd like to be a part of.<br/>
                </p>
                
                <p id='projects-intro'><br/>Currently I have a few projects going:</p>

                <div id="project-cards" 
                    className="card-stack-container"
                    role="region"
                    aria-label="Project carousel"
                    aria-roledescription="carousel"
                    tabIndex={0}
                    onKeyDown={handleCardKeyDown}
                >
                
                <div className="sr-only" aria-live='polite' aria-atomic='true'>
                    {`Showing ${projectCards[activeCardIndex].title}, ${activeCardIndex + 1} of ${projectCards.length}`}
               </div>

                <div className="card-stack" aria-live="polite" aria-atomic="false">
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
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${card.title} (${index + 1} of ${projectCards.length})`}
                            aria-hidden={!isActive}
                        >
                        <div className="card-glow" aria-hidden="true"></div>
                        <div className="card-corner top-left" aria-hidden="true"></div>
                        <div className="card-corner top-right" aria-hidden="true"></div>
                        <div className="card-corner bottom-left" aria-hidden="true"></div>
                        <div className="card-corner bottom-right" aria-hidden="true"></div>
                        <div className="stack-card-inner">
                            <h3 className="stack-card-title">{card.title}</h3>
                            <p className="stack-card-content">{card.content}</p>
                        </div>
                    </div>
                    )
                })}
                </div>

            <div className="card-nav" role="group" aria-label="Carousel controls">
                <button
                    className="ff7r-nav-btn"
                    onClick={prevCard}
                    aria-label="Previous project"
                    type="button"
                >
                <span className="btn-glow" aria-hidden="true"></span>
                <span className="btn-text" aria-hidden="true">←</span>
                </button>
            <div className="card-indicators">
                {projectCards.map((_, index) => (
                    <button 
                        className={`card-indicator ...`}
                        onClick={() => setActiveCardIndex(index)}
                        aria-label={`Go to ${projectCards[index].title}`}
                        aria-current={index === activeCardIndex ? "true" : undefined}
                        type="button"
                    />
                ))}
            </div>
                <button
                    className="ff7r-nav-btn"
                    onClick={nextCard}
                    aria-label="Next project"
                    type="button"
                >
                <span className="btn-glow" aria-hidden="true"></span>
                <span className="btn-text" aria-hidden="true">→</span>
              </button>
            </div>
        </div>    
        </section>
                
        <section id='skills-section' className="Skills" aria-labelledby="skills-header">
            <div className='section-head'>
                <div className='headline' aria-hidden="true"></div>
                <h2 id='skills-header'>Skills</h2>
                <div className='headline' aria-hidden="true"></div>
            </div> 
                
            <div id='skills-accordion' className='ff7r-accordion' role='region' aria-label="Skills Accordion">
                <div id='skill-group-tech' className='ff7r-accordion-item'>
                    <div id="tech-head"
                        className='ff7r-accordion-head'
                        role='button'
                        tabIndex={0}
                        aria-expanded={openSection === 'tech'}
                        aria-controls='tech-content'
                        onClick={() => handleToggle('tech')}
                        onKeyDown={(e) => handleAccordionKeyDown(e, 'tech')}
                    >
                            <span className='accordion-glow' aria-hidden='true'></span>
                            <span className='accordion-icon' aria-hidden='true'>◆</span>
                            <span className='accordion-title'>Technical Skills</span>
                            <span className='accordion-arrow' aria-hidden='true' style={{
                                transform: openSection === 'tech' ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s ease' 
                            }}>▼</span>
                        </div>
                        
                    {openSection === 'tech' && (
                    <div id="tech-content"
                        className={`ff7r-accordion-content ${openSection === 'tech' ? 'expanded' : 'collapsed'}`}
                        role="region"
                        aria-labelledby="skill-group-tech"
                        hidden={openSection !== 'tech'}
                    >
                        <div className="content-glow" aria-hidden="true"></div>
                            <ul id="technical-skills-list" className="skills-list">
                                <li><span className="skill-bullet" aria-hidden="true">▸</span> HTML</li>
                                <li><span className="skill-bullet" aria-hidden="true">▸</span> CSS</li>
                                <li><span className="skill-bullet" aria-hidden="true">▸</span> JavaScript</li>
                                <li><span className="skill-bullet" aria-hidden="true">▸</span> SQL</li>
                                <li><span className="skill-bullet" aria-hidden="true">▸</span> Linux, Windows, MacOS Literacy</li>
                                <li><span className="skill-bullet" aria-hidden="true">▸</span> Hardware Diagnostic and Repair</li>
                            </ul>
                        </div>
                    )}
                    </div>

                <div id="skill-group-creative" className="ff7r-accordion-item">
                        <div className="ff7r-accordion-head" 
                            role="button"
                            tabIndex={0}
                            aria-expanded={openSection === 'creative'}
                            aria-controls="creative-content"
                            onClick={() => handleToggle('creative')}
                            onKeyDown={(e) => handleAccordionKeyDown(e, 'creative')}
                        >
                            <span className="accordion-glow" aria-hidden="true"></span>
                            <span className="accordion-icon" aria-hidden="true">◆</span>
                            <span className="accordion-title">Creative Skills</span>
                            <span className='accordion-arrow' aria-hidden="true" style={{
                                transform: openSection === 'creative' ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s ease' 
                            }}>▼</span>
                        </div>

                {openSection === 'creative' && (
                <div className={`ff7r-accordion-content ${openSection === 'creative' ? 'expanded' : 'collapsed'}`}
                    role="region"
                    aria-labelledby="skill-group-creative"
                    hidden={openSection !== 'creative'}
                >
                    <div className="content-glow" aria-hidden="true"></div>
                        <ul id="creative-skills-list" className="skills-list">
                            <li><span className="skill-bullet" aria-hidden="true">▸</span> Dancing</li>
                            <li><span className="skill-bullet" aria-hidden="true">▸</span> Painting</li>
                        </ul>
                    </div>
                    )}
                </div>

                <div id="skill-group-personal" className="ff7r-accordion-item">
                        <div className="ff7r-accordion-head"
                            role="button"
                            tabIndex={0}
                            aria-expanded={openSection === 'personal'}
                            aria-controls="personal-content"
                            onClick={() => handleToggle('personal')}
                            onKeyDown={(e) => handleAccordionKeyDown(e, 'personal')}
                        >
                            <span className="accordion-glow" aria-hidden="true"></span>
                            <span className="accordion-icon" aria-hidden="true">◆</span>
                            <span className="accordion-title">Personal Interests</span>
                            <span className='accordion-arrow' aria-hidden="true" style={{
                                transform: openSection === 'personal' ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s ease' 
                            }}>▼</span>
                        </div>

                {openSection === 'personal' && (
                <div id="personal-content" 
                    className="ff7r-accordion-content"
                    role="region"
                    aria-labelledby="skill-group-personal"
                    hidden={openSection !== 'personal'}
                >
                    <div className="content-glow" aria-hidden="true"></div>
                        <ul id="personal-skills-list" className="skills-list">
                            <li><span className="skill-bullet" aria-hidden="true">▸</span> Gaming</li>
                            <li><span className="skill-bullet" aria-hidden="true">▸</span> Reading</li>
                            <li><span className="skill-bullet" aria-hidden="true">▸</span> Music</li>
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