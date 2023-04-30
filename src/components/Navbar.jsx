import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../images/CV.pdf';

const NavigationBar = () => {
  const handleDownloadResume = () => {
    // Replace the URL with the location of your resume file
    const resumeUrl = CV;
    window.open(resumeUrl, '_blank');
  };
  return (
    <>
      {/* <div style={{ margin: '3rem 5rem' }}> */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          // margin: '3rem 5rem',
          backgroundColor: 'white',
          alignItems: 'center',
          borderBottom: '1rem solid black',
        }}
      >
        <div className="logo" style={{ margin: '3rem 5rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            LOGO
          </Link>
        </div>
        <div className="nav-links" style={{ margin: '3rem 5rem' }}>
          <Link
            style={{ textDecoration: 'none', marginInline: '2rem' }}
            to="/projects"
          >
            Projects
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/contact">
            Contact
          </Link>

          <button
            onClick={handleDownloadResume}
            style={{
              marginInline: '2rem',
              backgroundColor: 'black',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '2rem',
            }}
          >
            Resume
          </button>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};

export default NavigationBar;
