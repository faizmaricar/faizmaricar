import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Card, Column } from '@faizmaricar/react-ui';

import {
  aboutStyles,
  imageContainerStyles,
  contentContainerStyles,
} from './about.styles';

import { SocialMedia } from '.';
import { useSiteMetadata } from '../hooks';

const StyledAbout = styled.div`
  ${aboutStyles}
`;

const StyledImageContainer = styled.div`
  ${imageContainerStyles}
`;

const StyledContentContainer = styled.div`
  ${contentContainerStyles}
`;

const StyledContentText = styled.p`
  text-align: justify;
`;

export function About() {
  const { defaultDescription } = useSiteMetadata();
  return (
    <Column xs={4} sm={4} md={8} lg={6} xl={6}>
      <Card>
        <StyledAbout>
          <StyledImageContainer>
            <StaticImage
              imgStyle={{ borderRadius: '50%' }}
              src="../images/profile.jpg"
              alt="profile"
            />
          </StyledImageContainer>
          <StyledContentContainer>
            <h2>About Me</h2>
            <StyledContentText>{defaultDescription}</StyledContentText>
          </StyledContentContainer>
          <SocialMedia />
        </StyledAbout>
      </Card>
    </Column>
  );
}

export default About;
