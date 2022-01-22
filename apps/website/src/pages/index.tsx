import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export function Index() {
  return (
    <>
      <h1>Faiz Maricar</h1>
      <h2>About me</h2>
      <StaticImage src="../images/profile.jpg" alt="profile" />
      <p>
        I'm a software engineer for the past 5 years. I specialize in web and
        mobile development.
      </p>
    </>
  );
}

export default Index;
