/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const services = path.resolve(`src/templates/services.js`)
  const thoughts = path.resolve(`src/templates/thoughts.js`)
  const caseStudies = path.resolve(`src/templates/caseStudies.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const postOrPage = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.category !== "noPage"
    )

    // console.log(postOrPage.length)

    // see https://github.com/robertcoopercode/gatsby-netlify-cms/blob/master/gatsby-node.js#L31

    postOrPage.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: node.fields.slug.includes("what-we-offer")
          ? services
          : node.fields.slug.includes("thoughts")
          ? thoughts
          : caseStudies,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
