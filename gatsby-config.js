module.exports = {
  siteMetadata: {
    title: `MiTSO Marketing`,
    description: `We deliver smart, tailored and targeted communications to help your business thrive`,
    author: `@conormcafee`,
    url: `https://mitsomarketing.com`,
    image: "/static/assets/pexels-photo-914931.jpg",
    twitterUsername: "@mitsomarketing",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/site/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MiTSO Marketing`,
        short_name: `mitso`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mitso-favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
