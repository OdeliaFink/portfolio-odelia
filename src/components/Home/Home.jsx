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

const Home = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <StyledImage src={Image2} />
        </ImageContainer>
        <ContentContainer>
          <Title>Welcome to My Website</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Link to="/projects" className="#projects">
            <StyledButton>see projects</StyledButton>
          </Link>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
