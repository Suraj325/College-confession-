import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

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
        <Navbar.Brand href="#" id="nav_brand">
          Confession
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-md-0"
            id="nav_bar"
            style={{ fontFamily: "Roboto Slab" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/college">College</Nav.Link>

            {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            <Nav.Link href="/startwriting">StartWriting</Nav.Link>
          </Nav>
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
