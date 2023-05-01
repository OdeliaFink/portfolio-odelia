import React from 'react';
import CV from '../../images/CV.pdf';
import { theme } from '../../styles/theme';
import {
  NavContainer,
  StyledLink,
  LinksContainer,
  StyledButton,
} from './styled-components';

const NavigationBar = () => {
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
        <LinksContainer>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledButton onClick={handleDownloadResume}>Resume</StyledButton>
        </LinksContainer>
      </NavContainer>
    </>
  );
};

export default NavigationBar;
