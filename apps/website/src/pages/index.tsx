import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export function Index() {
  return (
    <>
      <h2>About me</h2>
      <StaticImage src="../images/profile.jpg" alt="profile" width={100} />
      <p>
        I'm a software engineer for the past 5 years. I specialize in web and
        mobile development.
      </p>
    </>
  );
}

export default Index;
