import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@faizmaricar/react-ui';

import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { useSiteMetadata } from '../hooks';

/* eslint-disable-next-line */
export interface SocialMediaLinksProps {}

export function SocialMediaLinks() {
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
    <>
      {socialMediaIcons.map(({ icon, url }) => (
        <a
          key={icon.iconName}
          href={url}
          aria-label={icon.iconName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button outline icon={icon}>
            {icon.iconName}
          </Button>
        </a>
      ))}
    </>
  );
}

export default SocialMediaLinks;
