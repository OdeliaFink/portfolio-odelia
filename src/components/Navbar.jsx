import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      {/* <div style={{ margin: '3rem 5rem' }}> */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          // margin: '3rem 5rem',
          backgroundColor: 'grey',
          alignItems: 'center',
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
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};

export default NavigationBar;
