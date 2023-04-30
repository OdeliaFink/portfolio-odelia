import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',

        border: '2px solid black',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '33.33%', textAlign: 'center' }}>
          <img
            src="/path/to/logo.png"
            alt="Logo"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div style={{ width: '33.33%', textAlign: 'center' }}>
          <div>
            <a href="#">Link 1</a>
          </div>
          <div>
            <a href="#">Link 2</a>
          </div>
          <div>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div style={{ width: '33.33%', textAlign: 'center' }}>
          <div>
            <a href="#">Link 4</a>
          </div>
          <div>
            <a href="#">Link 5</a>
          </div>
          <div>
            <a href="#">Link 6</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
