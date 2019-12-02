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
import { Modal, Button, Collapsible, CollapsibleItem } from "react-materialize";
import Journal from "./Journal";

class JournalClub extends Component {
  componentDidMount() {
    this.props.getJournals();
    this.props.getUsers();
  }

  componentDidUpdate(prevProps) {
    if (process.env.NODE_ENV !== "production") {
      console.log(prevProps);
      console.log(this.props);
    }
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
        style={{ marginRight: "15px", marginTop: "23px" }}
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
        style={{ marginRight: "15px", marginTop: "23px" }}
      >
        <b>unvote</b>
      </span>
    );
  }

  addButton() {
    return (
      <Link
        to="/journalclub/add"
        className="btn left blue accent-3 waves-effect waves-light"
      >
        <b>add a new journal</b>
      </Link>
    );
  }

  deleteButton(journal) {
    return (
      <Modal
        trigger={
          <span
            className="btn-small right grey lighten-4 waves-effect waves-light red-text"
            style={{ marginRight: "15px", marginTop: "23px" }}
          >
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
              modal="close"
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
    } else return this.deleteButton(journal);
  }

  renderVoters(journal) {
    if (journal.votedBy.length === 0) return <h6>no one yet...</h6>;
    if (!this.props.auth.isAuthenticated)
      return <h6>Log in to see who voted for this journal.</h6>;
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
      <a href={journal.url} target="_blank" rel="noopener noreferrer">
        <i className="small material-icons inline-icon">open_in_new</i>
      </a>
    );
  }

  renderJournals(user) {
    return (
      <>
        {this.props.app.journals.map((journal, i) => {
          if (user.journals.includes(journal._id))
            return (
              <div key={i}>
                <div className="row">
                  <Journal journal={journal} />
                  <Modal
                    trigger={
                      <button
                        className="btn-floating btn-medium right blue accent-3 white-text"
                        style={{ marginTop: "20px", fontSize: "24px" }}
                      >
                        <b>{journal.votedBy.length}</b>
                      </button>
                    }
                  >
                    <h5>Voted by: </h5>
                    {this.renderVoters(journal)}
                  </Modal>
                  <div className="row">{this.renderActions(user, journal)}</div>
                </div>
                <div className="divider"></div>
              </div>
            );
          return null;
        })}
      </>
    );
  }

  renderUser(user) {
    if (user && user.journals.length > 0)
      return (
        <Collapsible accordion={false}>
          <CollapsibleItem header={<h5>{user.nickname}</h5>}>
            {this.renderJournals(user)}
          </CollapsibleItem>
        </Collapsible>
      );
    return null;
  }

  render() {
    let loggedUser = this.getUserById(this.props.auth.user.id);
    return (
      <div className="container">
        <div className="row">{this.addButton()}</div>
        {this.renderUser(loggedUser)}
        {this.props.app.users.map((user, i) => {
          if (!loggedUser || user._id !== loggedUser._id)
            return <div key={i}>{this.renderUser(user)}</div>;
          return null;
        })}
      </div>
    );
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
