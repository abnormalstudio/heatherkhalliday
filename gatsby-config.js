module.exports = {
  siteMetadata: {
    title: 'Heather Halliday',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-116316556-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '16h24zcri5xr',
        accessToken:
          '80c172a3d3f27b654fa417212c8b9c2a54f528950a958d948bab832ce805334b',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
