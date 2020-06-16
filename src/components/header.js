import { Link, FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Language from "./language";

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <header className="mdl-layout__header mdl-layout__header--waterfall mdl-layout__header--transparent">
        <div className="mdl-layout__header-row mdl-layout--large-screen-only">
          <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
            <Link to="/" className="mdl-navigation__link aiole-link">
              <FormattedMessage id="index_title" />
            </Link>
            <Link
              to="/accomodations/"
              className="mdl-navigation__link aiole-link"
            >
              <FormattedMessage id="accomo_title" />
            </Link>
            <Link
              to="/reservations/"
              className="mdl-navigation__link aiole-link"
            >
              <FormattedMessage id="reservations_title" />
            </Link>
            <Link to="/products/" className="mdl-navigation__link aiole-link">
              <FormattedMessage id="products_title" />
            </Link>
            <Link to="/contacts/" className="mdl-navigation__link aiole-link">
              <FormattedMessage id="contacts_title" />
            </Link>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__header-row mdl-layout--large-screen-only">
        <span className="titolo">{data.site.siteMetadata.title}</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <Language />
        </nav>
      </div>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
