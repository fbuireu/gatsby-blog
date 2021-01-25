const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
        {
            allMarkdownRemark{
                edges {
                    node {
                        html
                        id
                    frontmatter {
                        path
                        title
                        date
                        author
                        category
                        description
                    }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}

// for RSS feed:
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
