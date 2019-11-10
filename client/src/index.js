import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppFooter from "./components/layout/AppFooter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<AppFooter />, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
