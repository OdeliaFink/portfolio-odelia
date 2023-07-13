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
          <Title>Hi there</Title>
          <div></div>
          <Description>
            welcome to my portfolio! Other than being a food and music
            enthusiast, my passion lies in web development. i currently
            specialize in
          </Description>
          <h2
            style={{ fontFamily: 'Montserrat-Bold', border: '1px solid black' }}
          >
            {/* <Typical
              steps={[
                'full-stack development',
                2000,
                'react',
                2000,
                'javascript',
                2000,
                'typescript',
                2000,
              ]}
              loop={Infinity}
              className={'intro'}
            /> */}
          </h2>
          {/* <Link to="/projects" className="#projects">
            <StyledButton>see projects</StyledButton>
          </Link> */}
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
