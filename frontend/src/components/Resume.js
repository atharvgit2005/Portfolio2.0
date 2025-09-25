import React from 'react';

const Resume = () => {
  // The resume will be expected at frontend/public/resume.pdf
  // Replace that file with your actual resume to enable the viewer and download link below.
  const resumePath = '/resume.pdf';

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="center" style={{ marginBottom: 24 }}>
          <h2 className="section-title">Resume</h2>
          <div className="section-underline"></div>
          <p className="section-intro">View or download my resume below. Replace <code>frontend/public/resume.pdf</code> with your latest version.</p>
        </div>

        <div className="card" style={{ padding: 0 }}>
          <div style={{ width: '100%', height: '70vh' }}>
            <iframe
              title="Resume PDF"
              src={resumePath}
              style={{ width: '100%', height: '100%', border: 0, borderRadius: '16px' }}
            />
          </div>
        </div>

        <div className="center" style={{ marginTop: 16 }}>
          <a className="btn btn-primary" href={resumePath} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
