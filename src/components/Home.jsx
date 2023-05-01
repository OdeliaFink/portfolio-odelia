import React from 'react';
import Image2 from '../images/image2.jpg';
import Contact from './Contact';
import Projects from './Projects';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div style={{ height: 'auto', position: 'relative' }}>
        <div
          style={{
            border: '5rem solid white',
          }}
        >
          <img
            src={Image2}
            style={{
              objectFit: 'cover',
              width: '100%',

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
            paddingBlock: '10rem',
            paddingLeft: '4rem',
            marginRight: '54rem',
            border: '.5rem solid grey',
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
          <Link to="/projects">
            <button
              style={{
                padding: '1rem 5rem',
                backgroundColor: 'grey',
                border: 'none',
                borderRadius: '2rem',
              }}
            >
              see projects
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
