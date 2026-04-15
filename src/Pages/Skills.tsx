import { useState } from 'react';
import Header from '../Components/Header';

export default function Skills() {
  const [openSection, setOpenSection] = useState<string | null>('tech');

  const handleToggle = (section: string) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <>
      <Header />
      <main className="main">
        <section id="skills-section" className="Skills">
          <div className="section-head">
            <div className="headline" aria-hidden="true"></div>
            <h2 id="skills-header">Skills</h2>
            <div className="headline" aria-hidden="true"></div>
          </div>

          <div id="skills-accordion" className="ff7r-accordion">
            <div id="skill-group-tech" className="ff7r-accordion-item">
              <div
                className="ff7r-accordion-head"
                onClick={() => handleToggle('tech')}
              >
                <span className="accordion-glow"></span>
                <span className="accordion-icon">◆</span>
                <span className="accordion-title">Technical Skills</span>
                <span
                  className="accordion-arrow"
                  style={{
                    transform: openSection === 'tech' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.5s ease',
                  }}
                >
                  ▼
                </span>
              </div>

              {openSection === 'tech' && (
                <div className="ff7r-accordion-content">
                  <div className="content-glow"></div>
                  <ul id="technical-skills-list" className="skills-list">
                    <li>
                      <span className="skill-bullet">▸</span> HTML
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> CSS
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> JavaScript
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> SQL
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> Linux, Windows, MacOS Literacy
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> Hardware Diagnostic and Repair
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div id="skill-group-creative" className="ff7r-accordion-item">
              <div
                className="ff7r-accordion-head"
                onClick={() => handleToggle('creative')}
              >
                <span className="accordion-glow"></span>
                <span className="accordion-icon">◆</span>
                <span className="accordion-title">Creative Skills</span>
                <span
                  className="accordion-arrow"
                  style={{
                    transform: openSection === 'creative' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.5s ease',
                  }}
                >
                  ▼
                </span>
              </div>

              {openSection === 'creative' && (
                <div className="ff7r-accordion-content">
                  <div className="content-glow"></div>
                  <ul id="creative-skills-list" className="skills-list">
                    <li>
                      <span className="skill-bullet">▸</span> Dancing
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> Painting
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div id="skill-group-personal" className="ff7r-accordion-item">
              <div
                className="ff7r-accordion-head"
                onClick={() => handleToggle('personal')}
              >
                <span className="accordion-glow"></span>
                <span className="accordion-icon">◆</span>
                <span className="accordion-title">Personal Interests</span>
                <span
                  className="accordion-arrow"
                  style={{
                    transform: openSection === 'personal' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.5s ease',
                  }}
                >
                  ▼
                </span>
              </div>

              {openSection === 'personal' && (
                <div className="ff7r-accordion-content">
                  <div className="content-glow"></div>
                  <ul id="personal-skills-list" className="skills-list">
                    <li>
                      <span className="skill-bullet">▸</span> Gaming
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> Reading
                    </li>
                    <li>
                      <span className="skill-bullet">▸</span> Music
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
