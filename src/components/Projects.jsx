import React, { useState } from 'react';
import Carousel from 'react-carousel';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';

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

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  font-size: 2em;
  color: #ccc;
  padding: 0;
  z-index: 1;
`;

export const ArrowLeftIcon = styled(FaArrowLeft)`
  margin-right: 10px;
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  margin-left: 10px;
`;

export const CarouselRoot = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 2rem;
`;

export const CarouselImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;

export const CarouselDots = styled.ul`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const CarouselDot = styled.li`
  display: inline-block;
  margin: 0 5px;
`;

export const CarouselDotButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  font-size: 1.5em;
  color: #ccc;
  padding: 0;

  &:hover,
  &:focus {
    color: #333;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    color: #333;
  `}
`;

function Projects() {
  const [slideIndex, setSlideIndex] = useState(0);

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
    <div style={{ marginBlock: '5rem' }}>
      <h1>My Projects</h1>
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
          <p>{projectData[slideIndex].description}</p>
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
    </div>
  );
}

export default Projects;
