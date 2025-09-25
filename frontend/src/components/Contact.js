import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // UI state management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiBase = process.env.REACT_APP_API_URL || '';
      // Send form data to backend API
      const response = await axios.post(`${apiBase}/api/contact`, formData);
      
      if (response.data.success) {
        setSubmitStatus('success');
        setStatusMessage(response.data.message);
        // Clear form after successful submission
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
      if (error.response && error.response.data && error.response.data.error) {
        setStatusMessage(error.response.data.error);
      } else {
        setStatusMessage('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section header */}
        <div className="center" style={{marginBottom:40}}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-intro">Ready to start a conversation? Whether it's about a project, collaboration, or just to chat about code and waves, I'd love to hear from you.</p>
          <div className="section-underline"></div>
        </div>

        <div style={{maxWidth:960, margin:'0 auto'}}>
          <div className="grid grid-2" style={{gap:24}}>
            {/* Left side - Contact info and social links */}
            <div>
              <div>
                <h3 style={{fontSize:24, fontWeight:700, marginBottom:16}}>Let's Connect</h3>
                <p style={{opacity:0.85, marginBottom:16, lineHeight:1.7}}>
                  I'm always excited to discuss new opportunities, share ideas about technology, 
                  or talk about the latest windsurfing conditions. Drop me a message and let's 
                  start a conversation!
                </p>
              </div>

              {/* Contact methods */}
              <div style={{display:'grid', gap:12}}>
                <div className="card" style={{display:'flex', alignItems:'center', gap:12}}>
                  <div style={{fontSize:22}}>📧</div>
                  <div>
                    <h4 style={{margin:'0 0 4px'}}>Email</h4>
                    <p style={{opacity:0.75, margin:0}}>pahariaatharv2005@gmail.com</p>
                  </div>
                </div>
                <div className="card" style={{display:'flex', alignItems:'center', gap:12}}>
                  <div style={{fontSize:22}}>🌍</div>
                  <div>
                    <h4 style={{margin:'0 0 4px'}}>Location</h4>
                    <p style={{opacity:0.75, margin:0}}>Pune,maharashtra, India, Ready to Remote</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 style={{margin:'0 0 8px'}}>Find me online</h4>
                <div style={{display:'flex', gap:12}}>
                  <a 
                    href="https://github.com/atharvgit2005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{display:'inline-flex', alignItems:'center', gap:8}}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/atharv-paharia-468276272/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{display:'inline-flex', alignItems:'center', gap:8}}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="card">
              <form onSubmit={handleSubmit} style={{display:'grid', gap:16}}>
                {/* Name field */}
                <div>
                  <label htmlFor="name" style={{display:'block', fontWeight:700, marginBottom:8}}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" style={{display:'block', fontWeight:700, marginBottom:8}}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" style={{display:'block', fontWeight:700, marginBottom:8}}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="textarea"
                    placeholder="Tell me about your project, idea, or just say hello!"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{width:'100%'}}>
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    'Send Message '
                  )}
                </button>

                {/* Status message */}
                {submitStatus && (
                  <div className="card" style={{borderColor: submitStatus === 'success' ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)', color: submitStatus === 'success' ? '#86efac' : '#fca5a5'}}>
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Closing message */}
          <div className="center" style={{marginTop:32}}>
            <p style={{fontSize:18, opacity:0.85, fontStyle:'italic'}}>
              "Let's connect—happy to talk code, waves, or both!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
