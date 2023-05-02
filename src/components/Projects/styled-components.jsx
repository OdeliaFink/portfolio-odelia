import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  font-size: 2em;
  color: black;
  padding: 0;
  z-index: 1;

  @media (max-width: 425px) {
    top: 38%;
    color: white;
  }
`;

export const ArrowLeftIcon = styled(FaArrowLeft)`
  margin-right: 10px;
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  margin-left: 10px;
`;

export const CarouselRoot = styled.div`
  position: relative;

  height: 500px;
  margin-inline: 8rem;

  @media (max-width: 425px) {
    margin-inline: 0rem;
    position: none;
  }
`;

export const Container = styled.div`
  height: 45rem;

  @media (max-width: 425px) {
    margin-block: 0rem;

    margin-inline: 1rem;
  }
`;

export const CarouselSlide = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 2rem;

  @media (max-width: 425px) {
   padding-bottom: 0rem;
   padding-top: 0rem;
   height: 80%;
   top: 0rem
`;

export const ProjectDesc = styled.p`
  padding-block: 4rem;

  @media (max-width: 425px) {
    padding-block: 0rem;
  }
`;

export const CarouselImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
  border: 1.2rem solid grey;
  border-radius: 10%;

  @media (max-width: 425px) {
    width: 100%;
    margin-inline: 0rem;
    border: 1px solid grey;
  }
`;

export const CarouselDots = styled.ul`
  position: absolute;
  bottom: 20px;
  top: 34rem;
  left: 48%;
  transform: translateX(-50%);
  text-align: center;

  @media (max-width: 425px) {
    bottom: 0px;
    top: 58%;
    left: 47%;
  }
`;

export const CarouselDot = styled.li`
  display: inline-block;
  margin: 0 0.8rem;
`;

export const CarouselDotButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  font-size: 3.5em;
  color: #ccc;
  padding: 0;

  &:hover,
  &:focus {
    color: dark-grey;
  }

  ${({ isSelected }) =>
    isSelected &&
    `

    color: #ADC698;
  `}
`;
