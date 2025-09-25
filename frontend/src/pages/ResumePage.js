import React from 'react';

const ResumePage = () => {
  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <div className="center" style={{ marginBottom: 24 }}>
          <h1 className="section-title">Resume</h1>
          <div className="section-underline"></div>
          <p className="section-intro">This page is for your text-format resume. Share the content and I will place it here beautifully.</p>
        </div>

        <div className="card">
          <h2>Professional Summary</h2>
          <p style={{ opacity: 0.9 }}>
            Add your summary here. I can format it with headings, bullet lists, and links.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
