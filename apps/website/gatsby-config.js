module.exports = {
  siteMetadata: {
    title: `Faiz Maricar`,
    titleTemplate: 'Faiz Maricar· Software Engineer',
    image: '/profile.jpg',
    description: `I'm a software engineer for the past 5 years mainly working on web
    and mobile development. If you'd like to keep up with what I'm up to
    or you would like to say hi you can follow me on socials.`,
    url: 'https://www.faizmaricar.com',
    twitterUsername: '@faizmaricar',
  },
  plugins: [
    'gatsby-plugin-emotion',

    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
};
