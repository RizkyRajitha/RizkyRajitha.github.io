import React, { useState, useEffect } from "react"
import "../styles/blogpost.css"
import { Offline, Online, Detector } from "react-detect-offline"
import Footerblogpost from "../components/footerblogpost"
import Axios from "axios"
import Navbar from "../components/navbar"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import SEO from "../components/seo"

const moments = require("moment/moment")
const API = "https://blogrizky.herokuapp.com"
// const API = "http://localhost:3001";
export default function Blogpost({ data }) {
  console.log(data)

  const [postdata, setpostdata] = useState({})
  const [open, setopen] = useState(false)
  const [comment, setcomment] = useState("")
  const [displayname, setdisplayname] = useState("")
  const [email, setemail] = useState("")
  const [comments, setcomments] = useState([])

  const [onceoffline, setonceoffline] = useState(false)

  useEffect(() => {
    let id = data.markdownRemark.frontmatter.id

    Axios.get(`${API}/api/getpost/${id}`)
      .then(result2 => {
        setpostdata(result2.data)
      })
      .catch(err => console.log(err))

    Axios.get(`${API}/api/getcomments/${id}`)
      .then(result3 => {
        setcomments(result3.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const commentHandle = e => {
    e.preventDefault()
    let id = data.markdownRemark.frontmatter.id
    var payload = {
      displayName: displayname,
      email: email,
      content: comment,
      postid: id,
    }

    console.log(payload)
    Axios.post(`${API}/api/newcomment`, payload)
      .then(result => {
        setcomment("")
        if (result.data.err === false) {
          onCloseModal()
          Axios.get(`${API}/api/getcomments/${id}`)
            .then(result => {
              setcomments(result.data)
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onOpenModal = e => {
    e.preventDefault()
    setopen(true)
  }

  const onCloseModal = () => {
    setopen(false)
  }

  return (
    <div className="blogpostcontainer">
      <Navbar />
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={
          data.markdownRemark.frontmatter.description ||
          data.markdownRemark.excerpt
        }
      />
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
      <Modal
        // className="commentmodal"
        open={open}
        onClose={onCloseModal}
        closeIconSize={20}
        styles={{ modal: { color: "black", width: "50%" } }}
        center
      >
        <h4>i'd love to here your comments</h4>
        <form onSubmit={commentHandle}>
          <div class="form-group">
            <input
              type="text"
              required
              placeholder="your name"
              class="form-control"
              onChange={e => setdisplayname(e.target.value)}
            ></input>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              required
              placeholder="your email "
              onChange={e => setemail(e.target.value)}
            ></input>
          </div>

          <button className="btn btn-primary" type="submit">
            Comment
          </button>
        </form>
      </Modal>
      <div class="container ">
        <div class="row">
          <div class="col-lg-9">
            <h1 class="mt-4">{data.markdownRemark.frontmatter.title}</h1>

            <hr />
            {/* {console.log(new Date().toISOString())} */}
            <p>
              Posted {moments(data.markdownRemark.frontmatter.date).fromNow()}{" "}
            </p>

            <hr />

            <section
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            />

            {/* <Markdown
              children={markdown}
              options={{
                overrides: {
                  GithubGist: {
                    component: Gist,
                  },
                },
              }}
            /> */}

            <div class="card my-4 commentsection text-white ">
              <h5 class="card-header  ">Leave a Comment:</h5>
              <div class="card-body ">
                <form onSubmit={onOpenModal}>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="3"
                      required
                      value={comment}
                      onChange={e => setcomment(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Comment
                  </button>
                </form>
              </div>
            </div>

            {comments.map((ele, index) => {
              return (
                <div class="media mb-4">
                  <img
                    class="d-flex mr-3 rounded-circle"
                    // src="https://secure.gravatar.com/avatar/446d1e11e51072cd5a0c4e0daaf2de85?s=160&d=retro&r=pg"
                    src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"
                    alt=""
                  />
                  <div class="media-body">
                    <div className="commentheaderdiv">
                      <h3 class="mt-0">{ele.displayName}</h3>{" "}
                      <span className="commentfromnow">
                        {" "}
                        {moments(ele.date).fromNow()}{" "}
                      </span>
                    </div>

                    {ele.content}
                  </div>
                </div>
              )
            })}
          </div>

          <div class="col-lg-3">
            <div class="card my-4 commentsection">
              <h5 class="card-header">Views</h5>
              <div class="card-body">
                <div
                  className={`input-group ${
                    postdata.count ? "" : "loadskceliton"
                  } `}
                >
                  <h5>{postdata.count}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerblogpost />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        id
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
