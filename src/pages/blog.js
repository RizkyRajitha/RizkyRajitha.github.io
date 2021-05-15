import React, { useState, useEffect } from "react"
import { Offline, Online, Detector } from "react-detect-offline"
import Card from "../components/card"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Footerblogpost from "../components/footerblogpost"
import Axios from "axios"

import "../styles/blog.css"

const API = "https://blogrizky.herokuapp.com"

export default function Blog(props) {
  const [onceoffline, setonceoffline] = useState(false)
  // const [isloading, setisloading] = useState(true)
  const [timediff, settimediff] = useState(0)
  const [timeoutsync, settimeoutsync] = useState(true)
  const [blogviews, setblogviews] = useState("")

  const postdata = props.data.allMarkdownRemark.edges
  // console.log(postdata)

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/ip")
      .then(res => res.json())
      .then(result => {
        var timeDiff = Math.abs(Date.now() / 1000 - result.unixtime)
        settimediff(timeDiff / 60)
        if (timeDiff > 600) {
          settimeoutsync(false)
          // console.log("Data appears to be " + timeDiff / 60 + " minutes old.")
        }
      })
      .catch(err => {
        // console.log(err);
      })

    Axios.get(`${API}/api/blog`, {
      location: window.location.href,
    })
      .then(result => {
        if (result.data.err === false) {
          setblogviews(result.data.blogviews)
        }
      })
      .catch(err => {
        // console.log(err);
      })
  }, [])

  return (
    <div className="maindiv">
      <Navbar />
      {/* <h1>Bolgger</h1> */}
      <Detector
        onChange={con => {
          setonceoffline(true)
        }}
        render={({ online }) => <div></div>}
      />
      <Offline>
        <div className="offlinediv">You appears to be offline</div>
      </Offline>
      <Online>
        <div hidden={!onceoffline} className="onlinediv">
          Welcome Back
        </div>
      </Online>
      <SEO
        title={props.data.site.siteMetadata.title}
        description={props.data.site.siteMetadata.description}
      />
      <div className="timesync" hidden={timeoutsync}>
        <a href="https://time.is" rel="noopener noreferrer" target="_blank">
          your time appears to be {Math.floor(timediff)} minutes off . Is your
          clock out of sync?
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="my-4">
              Blogged by &ensp;
              <span className="smlltextblogheading">Rizky</span>
            </h1>
            {postdata.map((element, index) => {
              return (
                <Card
                  key={element.node.fields.slug}
                  title={element.node.frontmatter.title}
                  description={element.node.excerpt + "...."}
                  postedon={element.node.frontmatter.date}
                  index={element.node.fields.slug}
                />
              )
            })}
            {/* <ul class="pagination justify-content-center mb-4">
              <li class="page-item">
                <a class="page-link" href="#">
                  &larr; Older
                </a>
              </li>
              <li class="page-item disabled">
                <a class="page-link" href="#">
                  Newer &rarr;
                </a>
              </li>
            </ul> */}
          </div>
          <div className="col-lg-3">
            <div className="card my-4 commentsection">
              <h5 className="card-header">Total views All time</h5>
              <div className="card-body">
                <div
                  className={`input-group ${blogviews ? "" : "loadskceliton"} `}
                >
                  <h5 className="">{blogviews}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footerblogpost />
    </div>
  )
}

export const query = graphql`
  query PostDataQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
