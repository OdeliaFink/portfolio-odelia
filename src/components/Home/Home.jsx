import React from 'react';

import Image2 from '../../images/image2.jpg';
import {
  ImageContainer,
  StyledButton,
  StyledImage,
  Container,
  Description,
  Title,
  ContentContainer,
} from './styled-components';

import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Typewriter from '../Typewriter/Typerwriter';

const Home = () => {
  const texts = ['Hello', 'Welcome', 'Typewriter Effect'];
  return (
    <>
      <Container>
        <ImageContainer>
          <StyledImage src={Image2} />
        </ImageContainer>
        <ContentContainer>
          <Title>Hi there</Title>
          <div></div>
          <Description>
            welcome to my portfolio! Other than being a food and music
            enthusiast, my passion lies in web development. i currently
            specialize in
          </Description>
          <h1>
            <Typewriter textArray={texts} loop />
          </h1>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
