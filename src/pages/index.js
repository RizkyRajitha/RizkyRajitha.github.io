import React from "react"
import "../styles/index.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Footer from "../components/footer"

const IndexPage = props => {
  console.log(props)

  const nasadata = props.data.nasadata
  const imageData = props.data.file.childImageSharp.fluid

  return (
    <>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        backgroundColor={`#243447`}
      >
        <SEO
          title={props.data.site.siteMetadata.title}
          description={props.data.site.siteMetadata.description}
        />
        <div className="parallax">
          <main>
            <div className="parallaxTextdiv">
              <span className="parallaxText">Hi </span>
              <br />
              <span className="parallaxText">How you doing </span>
              <br />
              <span className="parallaxText">I'am Rajitha </span>
              <br />

              <Link
                className="btn visitblogbtn btn-outline-primary "
                to="/blog"
              >
                visit my blog
              </Link>
            </div>
          </main>

          <Footer
            imgcredit={`${nasadata.name}${
              nasadata.copyright ? ` by ${nasadata.copyright} ` : ""
            }`}
          />
        </div>
      </BackgroundImage>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    nasadata {
      copyright
      name
      url
    }
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
