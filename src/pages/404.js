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
              <span className="notfoundtext">
                Whoops . it seems that you are Lost
              </span>
              <br />
              <span className="notfoundtext">Don't worry </span>
              <br />

              <Link to="/blog" className="btn notfounditems large btn-primary">
                {" "}
                let's try from the begining{" "}
              </Link>

              <br />
              <span className="notfoundtextbottom">
                {/* {views} people have lost so far */}
              </span>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}
export default Notfound
