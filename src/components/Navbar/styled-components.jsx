import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../lib/breakpoints.tsx';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-bottom: 1rem solid black;
`;

export const LinksContainer = styled.div`
  margin: 3rem 5rem;
`;

export const StyledButton = styled.button`
  margin-inline: 2rem;
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-inline: 2rem;
`;
