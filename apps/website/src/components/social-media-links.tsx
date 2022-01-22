import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { socialMediaLinksStyle } from './social-media-links.styles';

/* eslint-disable-next-line */
export interface SocialMediaLinksProps {}

const StyledSocialMediaLinks = styled.ul`
  ${socialMediaLinksStyle}
`;

export function SocialMediaLinks(props: SocialMediaLinksProps) {
  const socialMediaIcons = [
    faTwitter,
    faLinkedin,
    faTwitch,
    faYoutube,
    faGithub,
  ];
  return (
    <StyledSocialMediaLinks>
      {socialMediaIcons.map((icon) => (
        <li key={icon.iconName}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </li>
      ))}
    </StyledSocialMediaLinks>
  );
}

export default SocialMediaLinks;
