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
          <StyledContentText>
            I'm a software engineer for the past 5 years mainly working on web
            and mobile development. If you'd like to keep up with what I'm up to
            or you would like to say hi you can follow me on socials.
          </StyledContentText>
        </StyledContentContainer>
      </StyledAbout>
    </Card>
  );
}

export default About;
