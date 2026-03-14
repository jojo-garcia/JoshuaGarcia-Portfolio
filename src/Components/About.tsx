import {Link} from 'react-router-dom'

export default function About() {
    return (
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
    )
}   