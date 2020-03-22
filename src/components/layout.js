import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import "./aiole.scss";

const Layout = ({ children, intl }) => {
  return (
    <div>
      <main>{children}</main>
      <footer class="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a class="link" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default injectIntl(Layout);
