import React from "react";

import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

import store from "../../store";

const ANZAppContainer = ({ children }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

ANZAppContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ANZAppContainer;
