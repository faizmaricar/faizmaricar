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
import { useSiteMetadata } from '../hooks';

/* eslint-disable-next-line */
export interface SocialMediaLinksProps {}

const StyledSocialMediaLinks = styled.ul`
  ${socialMediaLinksStyle}
`;

export function SocialMediaLinks(props: SocialMediaLinksProps) {
  const { twitterUrl, linkedinUrl, twitchUrl, youtubeUrl, githubUrl } =
    useSiteMetadata();

  const socialMediaIcons = [
    { icon: faTwitter, url: twitterUrl },
    { icon: faLinkedin, url: linkedinUrl },
    { icon: faTwitch, url: twitchUrl },
    { icon: faYoutube, url: youtubeUrl },
    { icon: faGithub, url: githubUrl },
  ];

  return (
    <StyledSocialMediaLinks>
      {socialMediaIcons.map(({ icon, url }) => (
        <li key={icon.iconName}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} size="lg" />
          </a>
        </li>
      ))}
    </StyledSocialMediaLinks>
  );
}

export default SocialMediaLinks;
