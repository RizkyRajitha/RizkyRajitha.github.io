import React, { Component } from "react"
// import {  } from "react-router-dom"
import "../styles/footer.css"
import "../styles/styles.css"
class Footer extends Component {
  render() {
    return (
      <footer className="landingpagefooter">
        {" "}
        <span className="imgcredit">
          {" "}
          Image : {this.props.imgcredit} Source{" "}
        </span>{" "}
        <a
          className="imgcreditanchor"
          target="_blank"
          rel="noopener noreferrer"
          href="https://apod.nasa.gov/apod/astropix.html"
        >
          NASA
        </a>
        <div className="landingpagefooterdiv">
          <div className="landingpagefooterdivitembr"></div>
          <div className="landingpagefooterdivitem">
            <a
              target="_blank"
              alt="github logo"
              rel="noopener noreferrer"
              className="landingpagefooterdivitemlink"
              href="https://github.com/RizkyRajitha"
            >
              <span
                alt="github logo"
                className="icon-github iconsfooter"
              ></span>
              {/* <i className="fab fa-github fa-3x"></i> */}
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
             rel="noopener noreferrer"
              target="_blank"
              className="landingpagefooterdivitemlink"
              href="https://twitter.com/RizkyRajitha"
            >
              <span className="icon-twitter iconsfooter"></span>
              {/* <i className="fab fa-twitter fa-3x"></i> */}
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
             rel="noopener noreferrer"
              target="_blank"
              className="landingpagefooterdivitemlink"
              href="https://dev.to/rizkyrajitha"
            >
              {" "}
              <span className="icon-dev-dot-to iconsfooter"></span>
              {/* <i className="fab fa-dev fa-3x"></i> */}
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
             rel="noopener noreferrer"
              target="_blank"
              className="landingpagefooterdivitemlink"
              href="https://open.spotify.com/user/q5rqmuxjvzfbuqhzhp79ybgp9"
            >
              {" "}
              <span className="icon-spotify iconsfooter"></span>
              {/* <i className="fab fa-spotify fa-3x"></i> */}
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
             rel="noopener noreferrer"
              target="_blank"
              className="landingpagefooterdivitemlink"
              href="https://ricosroom.blogspot.com/"
            >
              {" "}
              <span className="icon-blogger iconsfooter"></span>
              {/* <i className="fab fa-blogger fa-3x"></i> */}
            </a>
          </div>
          <div className="landingpagefooterdivitembr"></div>
        </div>
      </footer>
    )
  }
}

export default Footer
