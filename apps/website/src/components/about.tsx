import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Card } from '@faizmaricar/react-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
  imageContainerStyles,
  contentContainerStyles,
  socialLinksStyle,
} from './about.styles';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, minmax(10px, auto));
  grid-column-gap: 16px;
`;

const StyledImageContainer = styled.div`
  ${imageContainerStyles}
`;

const StyledContentContainer = styled.div`
  ${contentContainerStyles}
`;

const StyledSocialLinks = styled.ul`
  ${socialLinksStyle}
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
        <StyledContentContainer>
          <h2>About Me</h2>
          <p>
            I'm a software engineer for the past 5 years mainly working on web
            and mobile development. If you'd like to keep up with what I'm up to
            or you would like to say hi you can follow me on socials.
          </p>
          <StyledSocialLinks>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitch} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </li>
          </StyledSocialLinks>
        </StyledContentContainer>
      </StyledAbout>
    </Card>
  );
}

export default About;
