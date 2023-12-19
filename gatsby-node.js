/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require("fs")
const { Readable } = require("stream")
const { finished } = require("stream/promises")

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
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

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  let nasadata = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=vTHXftTGjJGHGvBAc1CkcrgW2GjPrQyqqqyn6Rta"
  ).then(data => data.json())

  console.log(nasadata)

  if (nasadata.media_type !== "image") {
    nasadata.title = "IC 2944: The Running Chicken Nebula"
    nasadata.copyright = "Juan Filas"
    nasadata.hdurl =
      "https://res.cloudinary.com/dijjqfsto/image/upload/c_fill,h_1080,w_1920/v1587394584/portfolio/IC2944_Filas_3320_ipfdtu.jpg"
  }

  const filePrefixbg = "./content/assets/"

  await downloadImage(nasadata.url, `${filePrefixbg}background.jpg`)

  const node = {
    name: nasadata.title,
    copyright: nasadata.copyright ? nasadata.copyright : "",

    url: nasadata.hdurl,
    id: createNodeId(`${nasadata.title}`),
    internal: {
      type: "nasadata",
      contentDigest: createContentDigest(nasadata),
    },
  }
  actions.createNode(node)
}

async function downloadImage(url, path) {
  //const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
  //const path = Path.resolve(__dirname, 'images', 'code.jpg')
  const response = await fetch(url)
  const body = Readable.fromWeb(response.body)
  const download_write_stream = fs.createWriteStream(path)
  await finished(body.pipe(download_write_stream))
}
