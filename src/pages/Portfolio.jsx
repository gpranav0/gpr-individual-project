import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <h2 className="page-title">Portfolio</h2>
      <p className="page-description">View my portfolio projects and work experience.</p>

      <div className="form-group" style={{ marginTop: '2rem' }}>
        <a
          href="https://gpr-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Visit MY-PORTFOLIO
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
