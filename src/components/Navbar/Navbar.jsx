import React from 'react';
import CV from '../../images/CV.pdf';

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
      <NavContainer>
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
