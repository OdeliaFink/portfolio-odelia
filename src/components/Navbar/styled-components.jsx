import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const breakpointMaximumSizes = {
  mobile: 767,
  tablet: 1339,
};

export const breakpoints = {
  desktop: `(min-width: ${breakpointMaximumSizes.tablet + 1}px)`,
  mobile: `(max-width: ${breakpointMaximumSizes.mobile}px)`,
  tablet: `(max-width: ${breakpointMaximumSizes.tablet}px)`,
};

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  border-bottom: 1rem solid black;

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const LinksContainer = styled.div`
  margin: 3rem 5rem;

  @media (max-width: ${breakpoints.mobile}) {
  }
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
