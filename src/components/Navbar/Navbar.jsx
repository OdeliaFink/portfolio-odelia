import React, { useState, useEffect } from 'react';
import CV from '../../images/CV.pdf';
import { FaHamburger, FaTimes, FaAlignJustify } from 'react-icons/fa';
import { theme } from '../../styles/theme';

import {
  StyledLogo,
  NavContainer,
  LogoContainer,
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

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadResume = () => {
    const resumeUrl = CV;
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavContainer theme={theme}>
        <LogoContainer>
          <StyledLogo to="/">Odelia</StyledLogo>
        </LogoContainer>
        <LinksContainer desktopOnly>
          <StyledLink to="/projects">projects</StyledLink>
          <StyledLink to="/contact">contact</StyledLink>
          <StyledButton onClick={handleDownloadResume}>resume</StyledButton>
        </LinksContainer>
        <IconContainer onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <FaTimes color="black" />
          ) : (
            <FaAlignJustify color="black" />
          )}
        </IconContainer>
      </NavContainer>
      {isMenuOpen && (
        <DropdownContainer>
          <div style={{ border: '1px solid black' }} />
          <DropdownLink to="/projects">Projects</DropdownLink>
          <div style={{ border: '1px solid black' }} />
          <DropdownLink to="/contact">Contact</DropdownLink>
          <div style={{ border: '1px solid black' }} />
          <DropdownLink onClick={handleDownloadResume}>Resume</DropdownLink>
          <div style={{ border: '1px solid black' }} />
        </DropdownContainer>
      )}
    </>
  );
};

export default NavigationBar;
