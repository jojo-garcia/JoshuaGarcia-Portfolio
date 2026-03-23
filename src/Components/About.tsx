export default function About() {
    return (
        <>  
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
            </section>
        </>
    );
}