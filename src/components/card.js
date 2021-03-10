import React, { Component } from "react"
// import Markdown from "markdown-to-jsx"
import { Link } from "gatsby"
import moments from "moment"
import "../styles/card.css"

// const moments = require("moment/moment")
class Card extends Component {
  render() {
    return (
      <div className="card mb-4 ">
        <div className="card-body postcard">
          <h2 className="card-title">{this.props.title}</h2>
          <p
            className="card-text  "
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          >
            {/* <Markdown>{this.props.description}</Markdown> */}

            {/* <Markdown children={this.props.description} /> */}
          </p>
          <Link to={`${this.props.index}`} className="btn btn-outline-primary">
            Read More &rarr;
          </Link>
        </div>
        <div className="card-footer postcard text-muted">
          Posted {moments(this.props.postedon).fromNow()}
        </div>
      </div>
    )
  }
}

export default Card

// // import { graphql } from "gatsby"
// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   )
// }
// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `
