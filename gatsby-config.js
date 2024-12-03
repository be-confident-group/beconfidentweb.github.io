/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Be Confident Group`,
    siteUrl: `https://www.beconfidentgroup.com`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`,
        ],
        display: 'swap'
      }
    }
  ]
};
