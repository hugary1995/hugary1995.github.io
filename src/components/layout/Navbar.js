import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as MatNavbar, NavItem, Icon } from "react-materialize";

class Navbar extends Component {
  render() {
    return (
      <div>
        <MatNavbar
          brand={
            <Link to="/" style={{ marginLeft: "30px" }}>
              {" "}
              Gary Hu{" "}
            </Link>
          }
          fixed
          alignLinks="right"
          className="blue darken-4"
          menuIcon={
            <div>
              {" "}
              <b>MENU</b>
              <Icon left>menu</Icon>
            </div>
          }
        >
          <NavItem href="/">
            ABOUT ME
            <Icon left>perm_identity</Icon>
          </NavItem>
          <NavItem href="/apps">
            APPS
            <Icon left>casino</Icon>
          </NavItem>
          <NavItem href="/gallery">
            GALLERY
            <Icon left>photo_library</Icon>
          </NavItem>
          <NavItem href="https://github.com/hugary1995/hugary1995.github.io">
            SOURCE
            <Icon left>code</Icon>
          </NavItem>
        </MatNavbar>
      </div>
    );
  }
}

export default Navbar;
