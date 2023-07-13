import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  color: white;
  padding: 1rem;
  position: fixed;
  gap: 66rem;
  z-index: 999;
  transition: background-color 0.3s ease;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-inline: 3rem;

  ${({ desktopOnly }) =>
    desktopOnly &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const StyledLogo = styled(Link)`
  font-family: CoveredByYourGrace-Regular;
  font-size: 5rem;
  text-decoration: none;
`;

export const LogoContainer = styled.div`
  padding-left: 4rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  margin-right: 2rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: regular;
  font-family: Montserrat-ExtraLight;
  color: black;

  &:hover {
    font-family: Montserrat-Bold;
  }
`;

export const StyledButton = styled.button`
  background-color: grey;
  color: white;
  border: 1px solid black;
  padding: 1rem 1.2rem;
  border-radius: 3rem;
  margin-left: 1rem;
  cursor: pointer;
  font-weight: bold;
  font-family: Montserrat-Regular;
  letter-spacing: 2px;
  font-size: 1.4rem;

  &:hover {
    background-color: #273469;
    border: 1px solid white;
    transition: 1s background-color;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;

  color: white;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  margin-left: 22rem;
  text-align: right;

  padding-top: 12px; /* add some top padding to make space for the navigation bar */

  z-index: 1;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DropdownLink = styled(Link)`
  color: black;
  padding: 1rem;
  text-decoration: none;
  font-size: 0.8rem;
  font-family: Montserrat-Regular;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: grey;
  }

  &:nth-child(6) {
    background-color: grey;
    color: white;
    border: 1px dash black;
  }

  @media (max-width: 425px) {
    background-color: grey;
    opacity: 0.8;
  }
`;
