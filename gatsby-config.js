module.exports = {
  siteMetadata: {
    title: "Heather K. Halliday"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116316556-1",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "les2y5injkn5",
        accessToken:
          "23603194dd62b940037cccc12b2b379a400431b0bdf20497c0945ffa7a069fa3"
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
