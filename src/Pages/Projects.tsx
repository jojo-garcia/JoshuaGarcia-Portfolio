import { useState } from 'react';
import Header from '../Components/Header';

interface ProjectCard {
  id: string;
  title: string;
  content: string;
}

export default function Projects() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  const projectCards: ProjectCard[] = [
    {
      id: 'pcard-sharelib',
      title: 'ShareLib.App',
      content: "I'm trying to build open-source library-styled booking cataloguing & lending software! Library budgets are constantly being slashed and the software is proprietary and siloed. My hope is that this software eventually allows individuals and communities to create their own library systems, even when abandoned or purposefully denied access by municipal/state/federal government.",
    },
    {
      id: 'pcard-homelab',
      title: 'Homelab',
      content: "Frankenstein had his monster, I have some old computers and a PS4 I'm trying to bash together to get a working multi-use home lab going.",
    },
    {
      id: 'project-card-secret',
      title: 'Secret Project',
      content: "A secret project that I can't wait to share someday!",
    },
  ];

  const nextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % projectCards.length);
  };

  const prevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + projectCards.length) % projectCards.length);
  };

  return (
    <>
      <Header />
      <main className="main">
        <section id="projects-section" className="Projects">
          <div className="section-head">
            <div className="headline" aria-hidden="true"></div>
            <h2 id="projects-header">My Projects</h2>
            <div className="headline" aria-hidden="true"></div>
          </div>
          
          <p id="projects-intro">
            Currently I have a few projects going. Check them out below:
          </p>

          <div id="project-cards" className="card-stack-container">
            <div className="card-stack">
              {projectCards.map((card, index) => {
                let offset = index - activeCardIndex;
                if (offset > 1) offset -= projectCards.length;
                if (offset < -1) offset += projectCards.length;
                const isActive = offset === 0;
                const isPrev = offset === -1;
                const isNext = offset === 1;

                let transform = 'translateX(0) scale(1)';
                let zIndex = 10;
                let opacity = 1;

                if (isPrev) {
                  transform = 'translateX(-55%) scale(0.8) rotateY(25deg)';
                  zIndex = 5;
                  opacity = 0.5;
                } else if (isNext) {
                  transform = 'translateX(55%) scale(0.8) rotateY(-25deg)';
                  zIndex = 5;
                  opacity = 0.5;
                } else if (!isActive) {
                  transform = 'translateX(0) scale(0.6)';
                  zIndex = 1;
                  opacity = 0;
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
                );
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
      </main>
    </>
  );
}
