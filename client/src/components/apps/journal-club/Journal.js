import React, { Component } from "react";
import Truncate from "react-truncate";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = { truncated: true };
    this.toggleTruncate = this.toggleTruncate.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (process.env.NODE_ENV !== "production") {
      console.log(prevProps);
      console.log(this.props);
    }
  }

  renderLink(journal) {
    return (
      <a href={journal.url} target="_blank" rel="noopener noreferrer">
        <i className="small material-icons inline-icon">open_in_new</i>
      </a>
    );
  }

  readMore() {
    if (this.state.truncated)
      return (
        <div className="row" style={{ margin: "0px", padding: "0px" }}>
          <button
            className="right btn-flat blue-text"
            onClick={this.toggleTruncate}
          >
            [ Read more ]
          </button>
        </div>
      );
    return null;
  }

  showLess() {
    if (!this.state.truncated)
      return (
        <div className="row">
          <button
            className="right btn-flat blue-text"
            onClick={this.toggleTruncate}
          >
            [ Show less ]
          </button>
        </div>
      );
    return null;
  }

  toggleTruncate() {
    if (this.state.truncated) this.setState({ truncated: false });
    else this.setState({ truncated: true });
  }

  render() {
    let journal = this.props.journal;
    return (
      <>
        <h5>
          <b>{journal.title}</b>
          {this.renderLink(journal)}
        </h5>
        <h6>{journal.authors}</h6>
        <Truncate
          lines={this.state.truncated && 3}
          ellipsis={<span>... ...</span>}
        >
          <p>{journal.description}</p>
        </Truncate>
        {this.readMore()}
        {this.showLess()}
      </>
    );
  }
}

export default Journal;
