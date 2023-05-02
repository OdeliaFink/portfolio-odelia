import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image1 from '../../images/image1.jpg';
import Image2 from '../../images/image2.jpg';
import { breakpoints } from '../Navbar/Navbar';

import {
  CarouselRoot,
  Container,
  ArrowButton,
  CarouselSlide,
  CarouselImage,
  CarouselDots,
  CarouselDot,
  CarouselDotButton,
  ProjectDesc,
} from './styled-components';

const projectData = [
  {
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    image: Image1,
  },
  {
    title: 'Project 2',
    description: 'This is the description for Project 2.',
    image: Image2,
  },
  {
    title: 'Project 3',
    description: 'This is the description for Project 3.',
    image: Image1,
  },
];

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const resizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeWindow);

    resizeWindow();

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  return windowWidth;
};

function Projects() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { width } = useWindowWidth();
  const mobile = breakpoints.mobile;
  const isMobile = width <= mobile;

  function goToPrevSlide() {
    if (slideIndex === 0) {
      setSlideIndex(projectData.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  function goToNextSlide() {
    if (slideIndex === projectData.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  return (
    <Container>
      <div style={{}}>
        <h1 style={{ textAlign: 'center' }}>Projects</h1>
      </div>
      <CarouselRoot>
        <ArrowButton onClick={goToPrevSlide} style={{ left: 0 }}>
          <FaArrowLeft />
        </ArrowButton>
        <ArrowButton onClick={goToNextSlide} style={{ right: 0 }}>
          <FaArrowRight />
        </ArrowButton>
        <CarouselSlide>
          <CarouselImage
            src={projectData[slideIndex].image}
            alt={projectData[slideIndex].title}
          />

          <ProjectDesc>{projectData[slideIndex].description}</ProjectDesc>
        </CarouselSlide>
        <CarouselDots>
          {projectData.map((project, idx) => (
            <CarouselDot key={idx}>
              <CarouselDotButton
                isSelected={slideIndex === idx}
                onClick={() => setSlideIndex(idx)}
              >
                &bull;
              </CarouselDotButton>
            </CarouselDot>
          ))}
        </CarouselDots>
      </CarouselRoot>
    </Container>
  );
}

export default Projects;
