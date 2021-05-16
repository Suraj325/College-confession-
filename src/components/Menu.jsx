import React from "react";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Menu = () => {
  return (
    <>
      <Navbar
        id="menu_bar"
        className="navbar sticky-top navbar-expand-lg navbar-dark nav fixed-top "
        style={{ backgroundColor: "#6803A1" }}
        expand="md"
      >
        <Navbar.Brand
          href="#"
          id="nav_brand"
          style={{
            fontSize: "17px",
            paddingTop: "10px",
            fontFamily: "Roboto Slab",
          }}
        >
          Confession
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
                activeStyle={{ color: "white" }}
                activeClassName="menu_active"
                exact
                className="nav-link"
                id="nav_bar"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
                activeStyle={{ color: "white" }}
                activeClassName="menu_active"
                className="nav-link"
                to="/startwriting"
                id="nav_bar"
              >
                StartWriting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Roboto Slab", fontSize: "16px" }}
                activeStyle={{ color: "white" }}
                activeClassName="menu_active"
                className="nav-link"
                id="nav_bar"
                to="/college"
              >
                Profile
              </NavLink>
            </li>
          </ul>
          {/* <Nav
            className="mr-auto my-2 my-md-0"
            id="nav_bar"
            style={{ fontFamily: "Roboto Slab" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/college">College</Nav.Link>

            <Nav.Link href="/startwriting">StartWriting</Nav.Link>
          </Nav> */}
          <div id="hstyle">
            <Form className="d-flex " id="searchform">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button id="search" variant="outline-success">
                Search
              </Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Menu;
