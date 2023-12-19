import React from "react"
import { Link } from "gatsby"
import "../styles/404page.css"

function Notfound(props) {
  return (
    <div className="notfoundcontainer">
      <div className=" notfound">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="notfoundtext">Whoops</span>
              <br></br>
              <span className="notfoundtext">it seems that you are Lost</span>
              <br />
              <Link to="/blog" className="btn large btn-primary">
                {" "}
                Go Back
              </Link>

              <br />
              <span className="notfoundtextbottom"></span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}
export default Notfound
