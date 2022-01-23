import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Card } from '@faizmaricar/react-ui';

import {
  aboutStyles,
  imageContainerStyles,
  contentContainerStyles,
  socialMediaContainerStyles,
} from './about.styles';
import SocialMediaLinks from './social-media-links';
import { useSiteMetadata } from '../hooks';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  ${aboutStyles}
`;

const StyledImageContainer = styled.div`
  ${imageContainerStyles}
`;

const StyledContentContainer = styled.div`
  ${contentContainerStyles}
`;

const StyledSocialMediaContainer = styled.div`
  ${socialMediaContainerStyles}
`;

const StyledContentText = styled.p`
  text-align: justify;
`;

export function About(props: AboutProps) {
  const { defaultImage, defaultDescription } = useSiteMetadata();
  return (
    <Card>
      <StyledAbout>
        <StyledImageContainer>
          <StaticImage
            imgStyle={{ borderRadius: '50%' }}
            src="../images/profile.jpg"
            alt="profile"
          />
        </StyledImageContainer>
        <StyledSocialMediaContainer>
          <SocialMediaLinks />
        </StyledSocialMediaContainer>
        <StyledContentContainer>
          <h2>About Me</h2>
          <StyledContentText>{defaultDescription}</StyledContentText>
        </StyledContentContainer>
      </StyledAbout>
    </Card>
  );
}

export default About;
