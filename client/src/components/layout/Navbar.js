import React, { Component } from "react";
import { Link, withRouter, matchPath } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../actions/authActions";
import {
  Navbar as MatNavbar,
  NavItem,
  SideNavItem,
  Icon
} from "react-materialize";

function Greeting(props) {
  const isRegisterOrLogin =
    !!matchPath(props.location.pathname, "/register") ||
    !!matchPath(props.location.pathname, "/login");
  if (isRegisterOrLogin) return null;
  if (props.auth.isAuthenticated) {
    return (
      <div>
        <span>Hello, {props.auth.user.nickname.split(" ")[0]} </span>
        <button
          onClick={props.onLogout}
          className="btn btn-medium waves-effect waves-light blue darken-4"
        >
          <b>Logout</b>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Link
          to="/register"
          className="btn btn-medium waves-effect waves-light blue darken-4"
        >
          <b>Register</b>
        </Link>
        <Link
          to="/login"
          className="btn btn-medium btn-flat waves-effect white black-text"
        >
          <b>Log In</b>
        </Link>
      </div>
    );
  }
}

class Navbar extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  customSideNav() {
    return (
      <div>
        <li>
          <img
            src="header.jpeg"
            style={{ maxWidth: "100%", display: "inline-block" }}
            alt=""
          />
        </li>
        <SideNavItem href="/aboutme">
          ABOUT ME
          <Icon left>perm_identity</Icon>
        </SideNavItem>
        <SideNavItem href="/skills">
          SKILLS
          <Icon left>build</Icon>
        </SideNavItem>
        <SideNavItem href="/profdevel">
          PROF. DEVEL.
          <Icon left>school</Icon>
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
            <Link to="/" className="right" style={{ marginRight: "30px" }}>
              {"< >"} hugary.dev
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
          <NavItem href="/skills">
            SKILLS
            <Icon left>build</Icon>
          </NavItem>
          <NavItem href="/profdevel">
            PROFESSIONAL DEVELOPMENT
            <Icon left>school</Icon>
          </NavItem>
          <NavItem href="/">
            APP GALLERY
            <Icon left>casino</Icon>
          </NavItem>
        </MatNavbar>
        <div
          className="col s12 right-align flow-text"
          style={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          <Greeting
            location={this.props.location}
            auth={this.props.auth}
            onLogout={this.onLogout}
          />
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { loginUser, logoutUser }
)(withRouter(Navbar));
