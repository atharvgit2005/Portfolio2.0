import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="center" style={{ marginBottom: 40 }}>
            <h2 className="section-title">About Me</h2>
            <div className="section-underline"></div>
          </div>

          {/* Bio content */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="space-y-6">
              <p>
                Hi, I’m <strong>Atharv Paharia</strong>, a second-year Computer Science undergraduate at Newton School of Technology, Pune,
                driven by a love for web development, creative technology, and building real-world solutions.
              </p>
              <p>
                I’m the coordinator of the performing arts club “Ensemble,” where I lead a talented team of vocalists and instrumentalists,
                plan rehearsals, and shape our club’s stage presence. Under my leadership we’ve grown from casual jam sessions into a performing
                group capable of hosting and competing at major college events.
              </p>
              <p>
                I’ve also been a core committee member of TEKRON 2025, our college’s annual tech fest, where I managed the design team—creating posters,
                ID cards, and certificates—and handled influencer outreach. In addition, I regularly host and organize cultural events, musical showcases,
                and inter-college competitions, giving me hands-on experience in event production, public speaking, and team coordination.
              </p>
              <p>
                Beyond tech, I’m a musician, guitarist, and storyteller who loves blending music and technology—from performing live with Ensemble to creating
                digital projects that inspire and engage. I thrive in environments where creativity and code meet, and I’m always looking for opportunities to
                collaborate, perform, and build impactful projects.
              </p>
            </div>
          </div>

          {/* Tech Stack & Tools */}
          <div className="grid grid-3">
            <div className="card">
              <h3>Frontend</h3>
              <p style={{ opacity: 0.85 }}>HTML, CSS, JavaScript</p>
            </div>
            <div className="card">
              <h3>Backend & Database</h3>
              <p style={{ opacity: 0.85 }}>Node.js, Express, MySQL, Prisma</p>
            </div>
            <div className="card">
              <h3>Other Skills & Tools</h3>
              <p style={{ opacity: 0.85 }}>Git/GitHub, Linux, Canva, basic cloud/server management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
