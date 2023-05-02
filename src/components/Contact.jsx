import Profile from '../images/profile.jpeg';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContactForm from './ContactForm.jsx';

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 14rem;
  margin-block: 3rem;

  @media (max-width: 425px) {
    margin-inline: 1rem;
  }
`;

const AboutMeLeft = styled.div`
  margin-right: 2rem;
`;

const AboutMeHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const AboutMeDescription = styled.p`
  font-size: 1.2rem;
`;

const AboutMeRight = styled.div`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

const AboutMeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const StyledContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

const ContactFormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContactFormInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const ContactFormTextarea = styled.textarea`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const ContactFormButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <>
      <div>
        <AboutMeContainer>
          <AboutMeLeft>
            <AboutMeHeading>About Me</AboutMeHeading>
            <AboutMeDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </AboutMeDescription>
          </AboutMeLeft>
          <AboutMeRight>
            <AboutMeImage src={Profile} alt="Your Name" />
          </AboutMeRight>
        </AboutMeContainer>
        <div style={{ marginInline: '14rem' }}>
          <h1>Languages and Frameworks</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

            marginLeft: '14rem',
            marginBlock: '3rem',
            // marginInline: '7rem',
          }}
        >
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
