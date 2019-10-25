import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./fotter.css";

class Footer extends Component {
  render() {
    return (
      <footer className="landingpagefooter">
        <div className="landingpagefooterdiv">
          <div className="landingpagefooterdivitembr"></div>
          <div className="landingpagefooterdivitem">
            <a
              className="landingpagefooterdivitemlink"
              href="https://github.com/RizkyRajitha"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
              className="landingpagefooterdivitemlink"
              href="https://twitter.com/RiZkY_Rajitha"
            >
              <i className="fab fa-twitter fa-3x"></i>
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
              className="landingpagefooterdivitemlink"
              href="https://dev.to/rizkyrajitha"
            >
              {" "}
              <i className="fab fa-dev fa-3x"></i>
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
              className="landingpagefooterdivitemlink"
              href="https://open.spotify.com/user/q5rqmuxjvzfbuqhzhp79ybgp9"
            >
              {" "}
              <i className="fab fa-spotify fa-3x"></i>
            </a>
          </div>
          <div className="landingpagefooterdivitem">
            <a
              className="landingpagefooterdivitemlink"
              href="https://ricosroom.blogspot.com/"
            >
              {" "}
              <i className="fab fa-blogger fa-3x"></i>
            </a>
          </div>
          <div
            className="landingpagefooterdivitem"
            className="landingpagefooterdivitembr"
          ></div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
