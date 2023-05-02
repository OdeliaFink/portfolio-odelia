import React, { useState } from 'react';
import CV from '../../images/CV.pdf';
import { FaHamburger, FaTimes, FaRaspberryPi } from 'react-icons/fa';
import { theme } from '../../styles/theme';

import {
  NavContainer,
  StyledLink,
  LinksContainer,
  StyledButton,
  DropdownContainer,
  DropdownLink,
  IconContainer,
} from './styled-components';

export const breakpointMaximumSizes = {
  mobile: 767,
  tablet: 1339,
};

export const breakpoints = {
  desktop: `(min-width: ${breakpointMaximumSizes.tablet + 1}px)`,
  mobile: `(max-width: ${breakpointMaximumSizes.mobile}px)`,
  tablet: `(max-width: ${breakpointMaximumSizes.tablet}px)`,
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = breakpoints.desktop;

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadResume = () => {
    const resumeUrl = CV;
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <NavContainer theme={theme}>
        <LinksContainer>
          <StyledLink to="/">LOGO</StyledLink>
        </LinksContainer>
        <LinksContainer desktopOnly>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledButton onClick={handleDownloadResume}>Resume</StyledButton>
        </LinksContainer>
        <IconContainer onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <FaTimes color="black" />
          ) : (
            <FaRaspberryPi color="black" />
          )}
        </IconContainer>
      </NavContainer>
      {isMenuOpen && (
        <DropdownContainer>
          <DropdownLink to="/projects">Projects</DropdownLink>
          <DropdownLink to="/contact">Contact</DropdownLink>
          <DropdownLink onClick={handleDownloadResume}>Resume</DropdownLink>
        </DropdownContainer>
      )}
    </>
  );
};

export default NavigationBar;
