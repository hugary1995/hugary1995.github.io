import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addJournal } from "../../../actions/appActions";

class AddJournal extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      url: "",
      authors: "",
      description: "",
      errors: {}
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (process.env.NODE_ENV !== "production") {
      console.log(prevProps);
      console.log(this.props);
    }
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors) {
        this.setState({
          errors: this.props.errors
        });
        if (this.props.errors.success)
          this.setState({
            title: "",
            url: "",
            authors: "",
            description: "",
            errors: {}
          });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newJournal = {
      title: this.state.title,
      url: this.state.url,
      authors: this.state.authors,
      description: this.state.description
    };
    console.log(newJournal);
    this.props.addJournal(this.props.auth.user.id, newJournal);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s12 offset-s0 m8 offset-m2">
            <Link to="/journalclub" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i>Back
            </Link>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h5>Journal information</h5>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.title}
                  error={errors.title}
                  id="title"
                  type="text"
                  className={classnames("", {
                    invalid: errors.title
                  })}
                />
                <label htmlFor="title">Title</label>
                <span className="red-text">{errors.title}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.url}
                  id="url"
                  type="text"
                />
                <label htmlFor="url">URL</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.authors}
                  id="authors"
                  type="text"
                />
                <label htmlFor="authors">Authors</label>
              </div>
              <div className="input-field col s12">
                <textarea
                  onChange={this.onChange}
                  value={this.state.description}
                  id="description"
                  className="materialize-textarea"
                  type="text"
                />
                <label htmlFor="description">Description</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light blue accent-3"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddJournal.propTypes = {
  addJournal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  app: state.app,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { addJournal }
)(AddJournal);
