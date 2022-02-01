module.exports = {
  siteMetadata: {
    title: `Faiz Maricar`,
    titleTemplate: 'Faiz Maricar· Software Engineer',
    image: '/profile.jpg',
    description: `I'm a software engineer mainly working on web
    and mobile development. If you'd like to keep up with what I'm up to, follow me on my socials.`,
    url: 'https://www.faizmaricar.com',
    twitterUsername: '@faizmaricar',
    twitterUrl: 'https://twitter.com/FaizMaricar',
    githubUrl: 'https://github.com/faizmaricar',
    twitchUrl: 'https://www.twitch.tv/faizmaricar',
    youtubeUrl: 'https://www.youtube.com/channel/UCOsENEH0kMZ3-L2dqeCyXAA',
    linkedinUrl: 'https://sg.linkedin.com/in/faiz-maricar-522a14105',
    htmlAttributes: {
      lang: 'en',
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify-cms`,
  ],
};
