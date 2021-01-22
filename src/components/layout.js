import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import "./aiole.css";

const Layout = ({ children, intl }) => {
  return (
    <>
      {children}
      <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
