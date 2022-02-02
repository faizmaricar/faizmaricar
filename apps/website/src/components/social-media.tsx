import React from 'react';
import { Button, Column } from '@faizmaricar/react-ui';
import styled from '@emotion/styled';
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { useSiteMetadata } from '../hooks';
import { css } from '@emotion/react';

const linkStyles = ({ theme }) =>
  css`
    margin-top: ${theme.spaces[2]}px;
  `;

const StyledLink = styled.a`
  ${linkStyles}
`;

export function SocialMedia() {
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
    <Column xs={4} sm={4} md={4} lg={4} xl={6} noPadding>
      {socialMediaIcons.map(({ icon, url }) => (
        <StyledLink
          key={icon.iconName}
          href={url}
          aria-label={icon.iconName}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: '8px' }}
        >
          <Button outline icon={icon}>
            {icon.iconName}
          </Button>
        </StyledLink>
      ))}
    </Column>
  );
}

export default SocialMedia;
