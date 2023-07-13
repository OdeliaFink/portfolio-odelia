import React, { useState, useEffect } from 'react';
import CV from '../../images/CV.pdf';
import { Link } from 'react-scroll';
import { FaHamburger, FaTimes, FaAlignJustify } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import Marquee from 'react-fast-marquee';
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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadResume = () => {
    const resumeUrl = CV;
    window.open(resumeUrl, '_blank');
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsMenuOpen(false);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <NavContainer theme={theme} isScrolled={isScrolled}>
        <LogoContainer>
          <StyledLogo to="/">Odelia</StyledLogo>
        </LogoContainer>
        <LinksContainer>
          <StyledLink>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </StyledLink>
          <StyledLink>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </StyledLink>
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
      {/* <Marquee
        pauseOnHover={true}
        speed={70}
        delay={0}
        style={{ whiteSpace: 'no-wrap' }}
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee> */}
    </>
  );
};

export default NavigationBar;

{
  /* <DropdownContainer>
<div style={{ border: '1px solid black' }} />
<DropdownLink to="/projects">Projects</DropdownLink>
<div style={{ border: '1px solid black' }} />
<DropdownLink to="/contact">Contact</DropdownLink>
<div style={{ border: '1px solid black' }} />
<DropdownLink onClick={handleDownloadResume}>Resume</DropdownLink>
<div style={{ border: '1px solid black' }} />
</DropdownContainer> */
}
