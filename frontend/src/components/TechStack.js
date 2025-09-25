import React from 'react';

const TechStack = () => {
  // Define the tech stack with categories
  const techStack = {
    frontend: [
      { name: 'React.js', iconUrl: 'https://img.icons8.com/color/48/react-native.png' },
      { name: 'JavaScript', iconUrl: 'https://img.icons8.com/color/48/javascript.png' },
      { name: 'HTML', iconUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
      { name: 'CSS', iconUrl: 'https://img.icons8.com/color/48/css3.png' }
    ],
    backend: [
      { name: 'Node.js', iconUrl: 'https://img.icons8.com/color/48/nodejs.png' },
      { name: 'Express.js', iconUrl: 'https://img.icons8.com/ios-filled/50/server.png' },
      { name: 'Python', iconUrl: 'https://img.icons8.com/color/48/python--v1.png' },
      { name: 'SQL', iconUrl: 'https://img.icons8.com/ios-filled/50/database.png' }
    ],
    tools: [
      { name: 'Prisma', iconUrl: 'https://img.icons8.com/ios-filled/50/diamond.png' }
    ]
  };

  // Component for individual tech skill card (plain CSS)
  const TechCard = ({ tech }) => (
    <div className="card" style={{textAlign:'center'}}>
      <img className="icon icon-32" src={tech.iconUrl} alt={`${tech.name} icon`} />
      <h3 style={{margin:'8px 0 0'}}>{tech.name}</h3>
    </div>
  );

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        {/* Section header */}
        <div className="center" style={{marginBottom:40}}>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-intro">The tools and technologies I use to bring ideas to life</p>
          <div className="section-underline"></div>
        </div>

        {/* Frontend Technologies */}
        <div style={{marginBottom:32}}>
          <h3 className="center" style={{color:'var(--sun-bright)', fontWeight:700, marginBottom:16}}>Frontend Development</h3>
          <div className="grid grid-4">
            {techStack.frontend.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div style={{marginBottom:32}}>
          <h3 className="center" style={{color:'var(--sun-bright)', fontWeight:700, marginBottom:16}}>Backend Development</h3>
          <div className="grid grid-4">
            {techStack.backend.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div style={{marginBottom:32}}>
          <h3 className="center" style={{color:'var(--sun-bright)', fontWeight:700, marginBottom:16}}>Tools & ORMs</h3>
          <div className="grid" style={{justifyItems:'center'}}>
            {techStack.tools.map((tech, index) => (
              <div style={{maxWidth:260, width:'100%'}}><TechCard key={index} tech={tech} /></div>
            ))}
          </div>
        </div>

        {/* Skills highlight section */}
        <div className="card center">
          <h3 style={{fontSize:24, marginBottom:16}}>What I Bring to the Table</h3>
          <div className="grid grid-3">
            <div>
              <div style={{fontSize:24, marginBottom:8}}>🎯</div>
              <h4>Full-Stack Expertise</h4>
              <p style={{opacity:0.8}}>From responsive frontends to robust backend APIs</p>
            </div>
            <div>
              <div style={{fontSize:24, marginBottom:8}}>⚡</div>
              <h4>Performance Focused</h4>
              <p style={{opacity:0.8}}>Optimized code that scales and performs under pressure</p>
            </div>
            <div>
              <div style={{fontSize:24, marginBottom:8}}>🔧</div>
              <h4>System Understanding</h4>
              <p style={{opacity:0.8}}>Deep knowledge from OS fundamentals to web technologies</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="center" style={{marginTop:24}}>
          <p className="section-intro" style={{marginBottom:16}}>Ready to build something amazing together?</p>
          <a
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
