import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import AboutMe from "./components/about-me/AboutMe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({height: window.innerHeight});
  }

  render() {
    return (
      <Router>
        <div className="App" style={{minHeight: this.state.height}}>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutme" component={AboutMe} />
        </div>
      </Router>
    );
  }
}
export default App;
