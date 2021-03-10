import React from "react"
import { Link } from "gatsby"
// import { withRouter } from "react-router-dom"
import "../styles/navbar.css"
import { Navbar, Container } from "react-bootstrap"

function Navbarr(props) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          className="navbarhome"
          //   onClick={() => props.history.push("/")}
        >
          {" "}
          <Link className="navbarhome" to="/">
            {" "}
            Rizky's Blog
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Navbar.Text
            // onClick={() => props.history.push("/blog")}
            className="navbarhome"
          >
            <Link>
              {" "}
              <span className="icon-home3 navbarhomeicon"></span>
            </Link>
            Home
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navbarr
/**
 

 */

/**
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container">
        <a className="navbar-brand" href="/">
          Rizky's Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="#/blog"
                // onClick={() => props.history.push("/blog")}
              >
                {" "}
                <span className="icon-home3 navbarhomeicon"></span>
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 

  */
