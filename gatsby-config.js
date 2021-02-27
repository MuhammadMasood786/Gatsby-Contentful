/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


 require('dotenv').config({
   path:`.env.${process.env.NODE_ENV}`
 })
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Blog Site`,
    description: `Write your site description here!`,
    author: `@ibaslogic`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
}
