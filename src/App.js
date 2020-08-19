// Imports ----- +
import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import CreatePoll from "./CreatePoll";
import PollAnalytics from "./PollAnalytics";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewPoll from "./ViewPoll";

// THIS IS A COMMENT SO THAT I CAN MAKE A PR
// Component ----- +
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/anonymousVotingBooth" component={HomePage} />
          <Route exact path="/createpoll" component={CreatePoll} />
          <Route path="/polls/:pollKey/analytics" component={PollAnalytics} />
          <Route path="/polls/:pollKey/view" component={ViewPoll} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
