import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

const Description = styled.p`
  text-align: center;
`;

// Data for icons and descriptions
const iconsData = [
  [
    { icon: 'icon1.png', description: 'Column 1, Icon 1 description' },
    { icon: 'icon2.png', description: 'Column 1, Icon 2 description' },
    { icon: 'icon3.png', description: 'Column 1, Icon 3 description' },
  ],
  [
    { icon: 'icon4.png', description: 'Column 2, Icon 1 description' },
    { icon: 'icon5.png', description: 'Column 2, Icon 2 description' },
    { icon: 'icon6.png', description: 'Column 2, Icon 3 description' },
  ],
  // ... add more columns with their respective icons and descriptions here
];

const Skills = () => {
  return (
    <Container>
      {iconsData.map((column, columnIndex) => (
        <IconRow key={columnIndex}>
          {column.map(({ icon, description }, index) => (
            <IconContainer key={index}>
              <Icon src={icon} alt={`Icon ${index + 1}`} />
              <Description>{description}</Description>
            </IconContainer>
          ))}
        </IconRow>
      ))}
    </Container>
  );
};

export default Skills;
