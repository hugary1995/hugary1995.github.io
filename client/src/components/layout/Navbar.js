import React, { Component } from "react";
import { Link, withRouter, matchPath } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../actions/authActions";
import { Navbar as MatNavbar, NavItem, Icon } from "react-materialize";

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

  render() {
    return (
      <div>
        <MatNavbar
          brand={
            <Link to="/" className="right" style={{ marginRight: "30px" }}>
              {"< / >"} hugary.dev
            </Link>
          }
          alignLinks="left"
          className="blue darken-4"
        >
          <NavItem href="/">
            About me
            <Icon left>perm_identity</Icon>
          </NavItem>
          <NavItem href="/">
            Skills
            <Icon left>build</Icon>
          </NavItem>
          <NavItem href="/">
            Experience
            <Icon left>perm_identity</Icon>
          </NavItem>
          <NavItem href="/">
            Projects
            <Icon left>perm_identity</Icon>
          </NavItem>
          <NavItem href="/">
            Publications
            <Icon left>perm_identity</Icon>
          </NavItem>
          <NavItem href="/">
            Apps
            <Icon left>perm_identity</Icon>
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
