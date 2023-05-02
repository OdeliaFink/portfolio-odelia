import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;

  color: white;
  padding: 1rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  ${({ desktopOnly }) =>
    desktopOnly &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const StyledLink = styled(Link)`
  color: white;
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  background-color: grey;
  color: white;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  margin-left: 1rem;
  cursor: pointer;
  font-weight: bold;
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
