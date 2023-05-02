import styled from 'styled-components';

export const ImageContainer = styled.div`
  border: 5rem solid white;

  @media (max-width: 425px) {
    border: 1rem solid black;
  }

  height: auto;
  position: relative;
  padding-top: 70%;
  overflow: hidden;
`;
export const StyledButton = styled.button`
  padding: 1rem 5rem;
  background-color: grey;
  border: none;
  border-radius: 2rem;

  @media (max-width: 425px) {
    padding: 1rem;
  }
`;
export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0.8;

  @media (max-width: 425px) {
    opacity: 0.4;
  }
`;
export const Container = styled.div`
  height: auto;
  position: relative;
`;
export const ContentContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding-block: 10rem;
  padding-left: 4rem;
  margin-right: 54rem;
  border: 0.5rem solid grey;

  @media (max-width: 425px) {
    border: none;
    padding-block: 0rem;
    left: 0rem;
    padding-left: 0rem;
    margin-right: 0rem;
    margin-inline: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;
export const Description = styled.p`
  font-size: 1.5rem;
  color: white;

  @media (max-width: 425px) {
    font-size: 12px;
    color: black;
  }
`;
