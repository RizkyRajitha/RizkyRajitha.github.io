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
