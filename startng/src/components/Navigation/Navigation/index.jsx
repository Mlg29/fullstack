import React from "react"
import "./navigation.scss"
import { Link } from "react-router-dom"
import { Navbar, Nav,} from "react-bootstrap"

function Navigation() {
    return (
      <div className="navi">
          <Navbar bg="transparent" expand="lg" className="nav-bg">
            <Navbar.Brand href="/"><img className="" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578937036/startng/ck01jartjyqebcz8ki0l.png" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto navigation">
                    <Nav.Link href="/" className="navigation-links">About us</Nav.Link>
                    <Nav.Link href="/about" className="nav-links">Courses</Nav.Link>
                      <Nav.Link href="/hng" className="nav-links">Hire a Grad</Nav.Link>
                      <Nav.Link href="/mentors" className="nav-links">Contact us</Nav.Link>
                      <Nav.Link href="/contact" className="nav-links"><button className="nav-btn" type="button">Start Learning</button></Nav.Link>
                    </Nav>
                            
            </Navbar.Collapse>
      </Navbar>
    </div>    
    )
}

export default Navigation