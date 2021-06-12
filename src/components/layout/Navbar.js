import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {
  Navbar as MatNavbar,
  NavItem,
  SideNavItem,
  Icon
} from "react-materialize";

class Navbar extends Component {
  customSideNav() {
    return (
      <div>
        <li>
          <img
            src="header.jpeg"
            style={{maxWidth: "100%", display: "inline-block"}}
            alt=""
          />
        </li>
        <SideNavItem href="/aboutme">
          ABOUT ME
          <Icon left>perm_identity</Icon>
        </SideNavItem>
        <SideNavItem href="/">
          APP GALLERY
          <Icon left>casino</Icon>
        </SideNavItem>
      </div>
    );
  }

  render() {
    return (
      <div>
        <MatNavbar
          brand={
            <Link to="/" className="right" style={{marginRight: "30px"}}>
              Gary Hu
            </Link>
          }
          fixed
          alignLinks="left"
          className="blue darken-4"
          menuIcon={
            <div>
              <b>MENU</b>
              <Icon left>menu</Icon>
            </div>
          }
          sidenav={this.customSideNav()}
        >
          <NavItem href="/aboutme">
            ABOUT ME
            <Icon left>perm_identity</Icon>
          </NavItem>
          <NavItem href="/">
            APP GALLERY
            <Icon left>casino</Icon>
          </NavItem>
        </MatNavbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
export default Navbar;
