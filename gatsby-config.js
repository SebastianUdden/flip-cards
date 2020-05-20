/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `simply-flash-cards`,
        short_name: `flash-cards`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#2b9bcb`,
        display: `standalone`,
        icon: `src/images/flash-cards.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
