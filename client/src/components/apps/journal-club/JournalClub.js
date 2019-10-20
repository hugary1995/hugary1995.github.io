import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getUsers,
  getJournals,
  vote,
  unvote,
  deleteJournal
} from "../../../actions/appActions";
import { Modal, Button } from "react-materialize";

class JournalClub extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getJournals();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props);
  }

  getUserById(id) {
    let users = this.props.app.users;
    for (var i = 0; i < users.length; i++)
      if (users[i]._id === id) return users[i];
    return null;
  }

  voteButton(journal) {
    return (
      <span
        onClick={() => this.props.vote(this.props.auth.user.id, journal._id)}
        className="btn-small right deep-purple accent-3 waves-effect waves-light"
        style={{ marginRight: "5px" }}
      >
        <b>vote</b>
      </span>
    );
  }

  unVoteButton(journal) {
    return (
      <span
        onClick={() => this.props.unvote(this.props.auth.user.id, journal._id)}
        className="btn-small right grey waves-effect waves-light"
        style={{ marginRight: "5px" }}
      >
        <b>unvote</b>
      </span>
    );
  }

  addButton(user) {
    if (user._id === this.props.auth.user.id)
      return (
        <Link
          to="/journalclub/add"
          className="btn-small right white black-text waves-effect waves-light"
          style={{ marginRight: "5px" }}
        >
          <b>add</b>
        </Link>
      );
  }

  editButton() {
    return (
      <Link
        to="#"
        className="btn-small right grey lighten-4 waves-effect waves-light black-text"
        style={{ marginRight: "5px" }}
      >
        <b>edit</b>
      </Link>
    );
  }

  deleteButton(journal) {
    return (
      <Modal
        trigger={
          <span className="btn-small left grey lighten-4 waves-effect waves-light red-text">
            <b>delete</b>
          </span>
        }
        actions={
          <>
            <Button modal="close" flat>
              <b>close</b>
            </Button>
            <Button
              className="red"
              modal="confirm"
              onClick={() => this.props.deleteJournal(journal._id)}
            >
              <b>confirm</b>
            </Button>
          </>
        }
      >
        <h6>Are you sure to delete journal</h6>
        <h5>{journal.title}?</h5>
      </Modal>
    );
  }

  renderActions(user, journal) {
    if (user._id !== this.props.auth.user.id) {
      let loggedUser = this.getUserById(this.props.auth.user.id);
      if (loggedUser) {
        if (!loggedUser.votedFor.includes(user._id))
          return <>{this.voteButton(journal)}</>;
        else if (journal.votedBy.includes(loggedUser._id))
          return <>{this.unVoteButton(journal)}</>;
      }
    } else
      return (
        <>
          {this.editButton()}
          {this.deleteButton(journal)}
        </>
      );
  }

  renderVoters(journal) {
    if (journal.votedBy.length === 0) return <h6>no one yet...</h6>;
    return journal.votedBy.map((voterId, i) => {
      return (
        <div key={i}>
          <h6>{this.getUserById(voterId).nickname}</h6>
        </div>
      );
    });
  }

  renderLink(journal) {
    return (
      <Link to={"//" + journal.url} target="_blank">
        <i className="tiny material-icons inline-icon">open_in_new</i>
      </Link>
    );
  }

  renderJournals(user) {
    return this.props.app.journals.map((journal, i) => {
      if (user.journals.includes(journal._id))
        return (
          <div key={i}>
            <div
              className="col s10 offset-s1 blue-grey lighten-5 with-border"
              style={{ paddingTop: "10px", paddingBottom: "5px" }}
            >
              <h6>
                <b>{journal.title}</b>
                {this.renderLink(journal)}
              </h6>
              <h6>{journal.authors}</h6>
              <p>{journal.description}</p>
              <Modal
                trigger={
                  <button className="btn-floating btn-small right blue accent-3 white-text">
                    <b>{journal.votedBy.length}</b>
                  </button>
                }
              >
                <h5>Voted by: </h5>
                {this.renderVoters(journal)}
              </Modal>
              {this.renderActions(user, journal)}
            </div>
          </div>
        );
      return null;
    });
  }

  renderUsers() {
    return this.props.app.users.map((user, i) => {
      return (
        <div key={i}>
          <div className="row">
            <div
              className="col s10 offset-s1 blue accent-3 flow-text white-text waves-effect z-depth-2"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                marginTop: "50px"
              }}
            >
              <i className="material-icons inline-icon">account_box</i>
              &nbsp;{user.nickname}
              {this.addButton(user)}
            </div>
            {this.renderJournals(user)}
            <div className="col s10 offset-s1 blue accent-3 center white-text z-depth-1 waves-effect">
              <i className="tiny material-icons inline-icon">linear_scale</i>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="container">{this.renderUsers()}</div>;
  }
}

JournalClub.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getJournals: PropTypes.func.isRequired,
  vote: PropTypes.func.isRequired,
  unvote: PropTypes.func.isRequired,
  deleteJournal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  app: state.app
});
export default connect(
  mapStateToProps,
  { getUsers, getJournals, vote, unvote, deleteJournal }
)(JournalClub);
