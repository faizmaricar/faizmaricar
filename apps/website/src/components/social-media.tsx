import React from 'react';
import { Button, Column } from '@faizmaricar/react-ui';

import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { useSiteMetadata } from '../hooks';

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
    <Column xs={4} sm={4} md={4} lg={4} xl={6}>
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
    </Column>
  );
}

export default SocialMedia;
