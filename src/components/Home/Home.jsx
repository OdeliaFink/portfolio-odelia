import React from 'react';
import Typical from 'react-typical';
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
          <Title>Hi there</Title>
          <div></div>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Typical
            steps={[
              'Full-Stack Developer',
              2000,
              'React',
              2000,
              'JavaScript',
              2000,
              'TypeScript',
              2000,
            ]}
            wrapper="h1"
            style={{ fontFamily: 'Montserrat-Thin' }}
            className={'intro'}
          />
          {/* <Link to="/projects" className="#projects">
            <StyledButton>see projects</StyledButton>
          </Link> */}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
