import React, { Component } from "react";
import PropTypes from "prop-types";

class ExternalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="flow-text">{this.props.title}</span>
          <p>{this.props.description}</p>
          <a
            href={this.props.to}
            className="btn-floating btn-large halfway-fab right waves-effect waves-light blue"
          >
            <i className="material-icons">arrow_forward</i>
          </a>
        </div>
      </div>
    );
  }
}
ExternalCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
export default ExternalCard;
