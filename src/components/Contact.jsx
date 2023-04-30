import Profile from '../images/profile.jpeg';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContactForm from './ContactForm.jsx';

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    <AboutMeContainer>
      <AboutMeLeft>
        <AboutMeHeading>About Me</AboutMeHeading>
        <AboutMeDescription>Insert your description here.</AboutMeDescription>
      </AboutMeLeft>
      <AboutMeRight>
        <AboutMeImage src="your-image-url.jpg" alt="Your Name" />
      </AboutMeRight>
      <ContactForm />
    </AboutMeContainer>
  );
};

export default Contact;
