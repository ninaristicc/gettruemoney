module.exports = {
  siteMetadata: {
    siteUrl: `https://www.gettruemoney.com`,
    title: `Get TrueMoney Wallet – English Language Version Review`,
    description: `Check out updated TrueMoney Wallet Review for 2019 in English. Get TrueMoney Wallet Application and experience cashless society.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/TrueMoney-Logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.gettruemoney.com`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-149690314-1",
      pageTransitionDelay: 0,
      cookieDomain: "gettruemoney.com",
    }
  },

    `gatsby-plugin-robots-txt`, `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
