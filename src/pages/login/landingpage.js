import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./landingpage.css";
import Footer from "../../components/footer/footer";
// const img1 = require("./509890.jpg");
const axios = require("axios");

class Landingpage extends Component {
  state = {};

  componentDidMount() {}

  btn1handler = e => {};

  render() {
    return (
      <div className="parallax">
        <main>
          <div className="parallaxTextdiv">
            <span className="parallaxText">Hello ,</span>
            <br />
            <span className="parallaxText">How you doing </span>
            <br />
            <span className="parallaxText">I'am Rajitha </span>
            <br />
            <button
              className="btn visitblogbtn btn-outline-primary "
              onClick={() =>
                window.open("https://ricosroom.blogspot.com/", "_blank")
              }
            >
              visit by blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landingpage;
