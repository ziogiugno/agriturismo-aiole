import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import "./aiole.scss";

const Layout = ({ children, intl }) => {
  return (
    <div>
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a className="link" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
