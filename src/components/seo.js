/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const baseUrl = "https://rizkyrajitha.github.io"

const SEO = ({ description, lang, meta, title, ogimage }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  // console.log(metaDescription, title, site.siteMetadata.title)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: `${baseUrl}/ogimage/${ogimage}`,
          // "https://res.cloudinary.com/dijjqfsto/image/upload/v1573326991/android-chrome-192x192_d205u8.png",
        },
        {
          name: `og:locale`,
          content: "si_LK",
        },
        {
          name: `og:site_name`,
          content: "Rajitha's Blog",
        },
        {
          name: `twitter:image:src`,
          content: `${baseUrl}/ogimage/${ogimage}`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:widgets`,
          content: `new-embed-design: "on"`,
        },
        {
          name: `keywords`,
          content: ` software, coding, development, engineering,`,
        },

        // twitter:card: "summary_large_image"
        // twitter:creator: "@alagrede"
        // twitter:description: "Are you using a markdown tool to take note?"
        // twitter:image:src: "https://res.cloudinary.com/practicaldev/image/fetch/s--czsCcI7p--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4rs4uda5tjidpmsaa6kh.png"
        // twitter:site: "@thepracticaldev"
        // twitter:title: "Dev tool: A Markdown editor for developers 🔥"
        // twitter:widgets:new-embed-design: "on"
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
