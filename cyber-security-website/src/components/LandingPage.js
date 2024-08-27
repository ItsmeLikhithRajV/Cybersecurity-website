import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Protect Yourself from Cybercrime</h1>
      <h2>Check if Your Data Has Been Breached</h2>
      <a href="https://haveibeenpwned.com/" target="_blank" rel="noopener noreferrer">
        <button>Check Now</button>
      </a>
    </div>
  );
}

export default LandingPage;

