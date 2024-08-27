import React from 'react';

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h1>About Me</h1>
      <p>Our mission is to provide the best resources to protect you from cyber threats.</p>

      <section className="team-section">
        <h2>Meet the Creator</h2>
        <div className="team-member">
          <h3>Likhith Raj V</h3>
          <p>Cyber security enthusiast</p>
          <p>Built out of curiosity, this platform offers useful tools, news, and resources related to cybersecurity. Likhith has developed this site to share knowledge and provide practical resources for anyone interested in cybersecurity.</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>Email: <a href="mailto:likhithsubbu@gmail.com">LRV</a></p>
        <p>Phone: 234567890</p>
      </section>
    </div>
  );
}

export default AboutUsPage;
