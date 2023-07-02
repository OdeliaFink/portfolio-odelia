import styled from 'styled-components';

// export const ImageContainer = styled.div`
//   border: 3rem solid white;

//   @media (max-width: 425px) {
//     border: 1rem solid black;
//   }

//   height: auto;
//   position: relative;
//   padding-top: 80%;
//   overflow: hidden;
// `;

export const ImageContainer = styled.div`
  height: auto;
`;

// export const StyledImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 45%;
//   object-fit: cover;
//   opacity: 0.2;

//   @media (max-width: 425px) {
//     opacity: 0.4;
//     height: 100%;
//   }
// `;

export const StyledImage = styled.img`
  height: 45%;
  width: 100%;
`;

export const StyledButton = styled.button`
  padding: 1rem 5rem;
  background-color: #273469;
  border: 3px solid black;
  border-radius: 2rem;
  color: white;
  font-weight: bold;

  @media (max-width: 425px) {
    padding: 1rem;
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
  padding-block: 5rem;
  padding-left: 5rem;
  margin-right: 38rem;

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
  font-size: 7rem;
  font-weight: bold;
  color: black;
  font-family: Montserrat-Bold;
  margin-bottom: 0;

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;
export const Description = styled.p`
  font-size: 1.4rem;
  color: black;
  font-family: Montserrat-Thin;

  @media (max-width: 425px) {
    font-size: 12px;
    color: black;
  }
`;
