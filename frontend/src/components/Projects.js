import React from 'react';

const Projects = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Coastal Conditions PWA",
      description: "A personal project to track wind speed, direction, and tide times for my favorite local spots. It's my go-to tool for planning the next session on the water, built with React and a live weather API.",
      technologies: ["React", "PWA", "Weather API", "JavaScript"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      iconUrl: "https://img.icons8.com/color/48/sea-waves.png"
    },
    {
      id: 2,
      title: "Linux From Scratch (LFS)",
      description: "Built a custom Linux OS from the ground up by compiling everything from source. This project provided a deep understanding of OS architecture and package management.",
      technologies: ["Linux", "C", "Shell Scripting", "System Administration"],
      liveDemo: null, // No live demo for this type of project
      sourceCode: "#",
      featured: true,
      iconUrl: "https://img.icons8.com/color/48/linux--v1.png"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my journey as a developer and windsurfer. Built with React, Express.js, and Prisma with a focus on performance and user experience.",
      technologies: ["React", "Node.js", "Express", "Prisma", "CSS"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
      iconUrl: "https://img.icons8.com/color/48/briefcase.png"
    }
  ];

  // Component for individual project card
  const ProjectCard = ({ project }) => (
    <div className="card">
      {project.featured && (
        <div style={{position:'relative', marginBottom:8}}>
          <span style={{background:'linear-gradient(90deg, var(--sun-bright), var(--coral-warm))', color:'var(--ocean-deep)', padding:'4px 10px', borderRadius:999, fontWeight:700, fontSize:12}}>Featured</span>
        </div>
      )}
      <img className="icon icon-32" src={project.iconUrl} alt={`${project.title} icon`} style={{marginBottom:8}} />
      <h3 style={{fontWeight:800, margin:'6px 0'}}>{project.title}</h3>
      <p style={{opacity:0.85, marginBottom:12}}>{project.description}</p>
      <div style={{marginBottom:12, display:'flex', gap:8, flexWrap:'wrap'}}>
        {project.technologies.map((tech, index) => (
          <span key={index} style={{padding:'6px 10px', borderRadius:999, border:'1px solid rgba(255,200,87,0.3)', color:'var(--sun-bright)', background:'rgba(255,200,87,0.15)', fontSize:12}}>{tech}</span>
        ))}
      </div>
      <div style={{display:'flex', gap:12}}>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{display:'inline-flex', alignItems:'center', gap:8}}>
            <img className="icon icon-20" src="https://img.icons8.com/fluency/48/rocket.png" alt="launch" />
            Live Demo
          </a>
        )}
        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{display:'inline-flex', alignItems:'center', gap:8}}>
          <img className="icon icon-20" src="https://img.icons8.com/fluency-systems-filled/48/code.png" alt="code" />
          View Code
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section header */}
        <div className="center" style={{marginBottom:40}}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-intro">A showcase of projects that blend technical expertise with creative problem-solving, each one teaching me something new about the craft of development.</p>
          <div className="section-underline"></div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-3" style={{marginBottom:32}}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional info section */}
        <div className="card center">
          <h3 style={{fontSize:24, marginBottom:10}}>More Projects Coming Soon</h3>
          <p className="section-intro" style={{marginBottom:16}}>I'm always working on new projects and exploring emerging technologies. Each project is an opportunity to push boundaries and learn something new.</p>
          <div className="grid grid-3" style={{marginTop:12}}>
            <div className="center">
              <img className="icon icon-24" src="https://img.icons8.com/fluency/48/check-all.png" alt="completed" />
              <div style={{color:'var(--sun-bright)', fontWeight:800, fontSize:18, marginTop:6}}>3+</div>
              <p style={{opacity:0.8}}>Projects Completed</p>
            </div>
            <div className="center">
              <img className="icon icon-24" src="https://img.icons8.com/fluency/48/source-code.png" alt="code" />
              <div style={{color:'var(--sun-bright)', fontWeight:800, fontSize:18, marginTop:6}}>∞</div>
              <p style={{opacity:0.8}}>Lines of Code</p>
            </div>
            <div className="center">
              <img className="icon icon-24" src="https://img.icons8.com/color/48/sea-waves.png" alt="waves" />
              <div style={{color:'var(--sun-bright)', fontWeight:800, fontSize:18, marginTop:6}}>—</div>
              <p style={{opacity:0.8}}>Waves Caught While Coding</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="center" style={{marginTop:24}}>
          <p className="section-intro" style={{marginBottom:16}}>Interested in collaborating on a project?</p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary"
          >
            Let's Build Something Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
