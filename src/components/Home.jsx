import React from 'react';
import Image1 from '../images/image1.jpg';

const Home = () => {
  return (
    <div style={{ height: '50vh', position: 'relative' }}>
      <div
        style={{
          border: '3rem solid white',
        }}
      >
        <img
          src={Image1}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            opacity: 0.8,
          }}
          alt="Background"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          paddingTop: '10rem',
          paddingLeft: '4rem',
          marginRight: '54rem',
          border: '1px solid white',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
          Welcome to My Website
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ fontSize: '1.5rem', color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          style={{
            padding: '1rem 5rem',
            backgroundColor: 'grey',
            border: 'none',
            borderRadius: '2rem',
          }}
        >
          learn more
        </button>
      </div>
    </div>
  );
};

export default Home;
