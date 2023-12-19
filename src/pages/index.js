import React from "react"
import "../styles/index.css"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = props => {
  const nasadata = props.data.nasadata

  return (
    <>
      <Seo
        title={props.data.site.siteMetadata.title}
        description={props.data.site.siteMetadata.description}
      />
      <div className="parallax">
        <StaticImage
          src="../../content/assets/background.jpg"
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        />
        <main>
          <div className="parallaxTextdiv">
            <span className="parallaxText">Hi </span>
            <br />
            <span className="parallaxText">Nice to meet you </span>
            <br />
            <span className="parallaxText">I'am Rajitha </span>
            <br />

            <Link className="btn visitblogbtn btn-outline-primary" to="/blog">
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
  }
`
