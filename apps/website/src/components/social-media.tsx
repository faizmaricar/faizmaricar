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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const linkStyles = ({ theme }) =>
  css`
    margin-right: ${theme.spaces[4]}px;
    margin-bottom: ${theme.spaces[2]}px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    color: ${theme.colors.primary.main};
    &: hover {
      cursor: pointer;
    }
  `;

const StyledLink = styled.li`
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
    <ul>
      {socialMediaIcons.map(({ icon, url }) => (
        <StyledLink key={icon.iconName}>
          <a
            href={url}
            aria-label={icon.iconName}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
            &nbsp;
            {icon.iconName}
          </a>
        </StyledLink>
      ))}
    </ul>
  );
}

export default SocialMedia;
