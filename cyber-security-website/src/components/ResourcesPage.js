import React from 'react';
import './ResourcesPage.css'; // Corrected path to the CSS file

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <section className="tips">
        <h2>Cybersecurity Tips</h2>
        <a href="https://www.cisa.gov/cybersecurity-tips" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Cybersecurity Tips Infographic" />
          <p>Check out these cybersecurity tips from CISA.</p>
        </a>
      </section>

      <section className="videos">
        <h2>How-to Videos</h2>
        <div className="video">
          <a href="https://www.youtube.com/watch?v=p-iaKw2PP-Y" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/p-iaKw2PP-Y/maxresdefault.jpg" alt="How to have a safe password" />
            <p>How to have a safe password</p>
          </a>
        </div>
        <div className="video">
          <a href="https://www.youtube.com/watch?v=EZjrwN5Jkfw" target="_blank" rel="noopener noreferrer">
            <img src="https://img.youtube.com/vi/EZjrwN5Jkfw/maxresdefault.jpg" alt="How-to Video on VPN Setup" />
            <p>How to Set Up a VPN</p>
          </a>
        </div>
      </section>

      <section className="checklists">
        <h2>Cybersecurity Checklists</h2>
        <div className="checklist">
          <a href="https://www.securityhq.com/blog/cyber-security-checklist-infographic/" target="_blank" rel="noopener noreferrer">
            <p>Personal Checklist</p>
          </a>
        </div>
        <div className="checklist">
          <a href="https://iet.ucdavis.edu/news/use-checklist-secure-your-home-network-against-cyber-threats" target="_blank" rel="noopener noreferrer">
            <p>Home Network Checklist</p>
          </a>
        </div>
      </section>

      <section className="tools">
        <h2>Cybersecurity Tools</h2>
        <div className="tool">
          <a href="https://www.avast.com/en-us/index" target="_blank" rel="noopener noreferrer">
            <p>Recommended Antivirus Software: Avast</p>
          </a>
        </div>
        <div className="tool">
          <a href="https://www.cisa.gov/cybersecurity-tools" target="_blank" rel="noopener noreferrer">
            <p>Online Scanners: CISA Cybersecurity Tools</p>
          </a>
        </div>
      </section>

      <section className="workshops">
        <h2>Workshops and Events</h2>
        <div className="event">
          <a href="https://www.eventbrite.com/e/cybersecurity-workshop-tickets-1234567890" target="_blank" rel="noopener noreferrer">
            <p>Upcoming Webinar on Cybersecurity</p>
          </a>
        </div>
        <div className="event">
          <a href="https://www.meetup.com/cybersecurity-meetup/events/" target="_blank" rel="noopener noreferrer">
            <p>Local Cybersecurity Meetups</p>
          </a>
        </div>
        <div className="event">
          <a href="https://www.sans.org/cyber-security-training/" target="_blank" rel="noopener noreferrer">
            <p>Training Programs and Certifications</p>
          </a>
        </div>
      </section>

      <section className="community">
        <h2>Community Engagement</h2>
        <div className="forum">
          <a href="https://www.reddit.com/r/cybersecurity/" target="_blank" rel="noopener noreferrer">
            <p>Community Forum on Reddit</p>
          </a>
        </div>
        <div className="social-media">
          <p>Follow us on social media for updates:</p>
          <a href="https://twitter.com/CyberSecurity" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.facebook.com/CyberSecurity" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </section>

      <section className="organization-resources">
        <h2>Resources for Organizations</h2>
        <div className="resource">
          <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">
            <p>Enterprise Security Best Practices: NIST Cybersecurity Framework</p>
          </a>
        </div>
        <div className="resource">
          <a href="https://www.cisa.gov/incident-response" target="_blank" rel="noopener noreferrer">
            <p>Incident Response Plans: CISA Guidance</p>
          </a>
        </div>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <div className="glossary">
          <a href="https://www.cisa.gov/cybersecurity-glossary" target="_blank" rel="noopener noreferrer">
            <p>Cybersecurity Glossary: CISA</p>
          </a>
        </div>
        <div className="useful-links">
          <a href="https://www.cert.org/" target="_blank" rel="noopener noreferrer">
            <p>Reputable Security Organizations: CERT</p>
          </a>
          <a href="https://www.nist.gov/" target="_blank" rel="noopener noreferrer">
            <p>Government Resources: NIST</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
