import { Link, FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import Language from "./language";
import { useStaticQuery, graphql } from "gatsby";

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
    <header>
      <div>
        <div class="navbar nav columns">
          <div className="column">
            <Link to="/">
              <FormattedMessage id="index_title" />
            </Link>
          </div>
          <div className="column">
            <Link to="/accomodations/">
              <FormattedMessage id="accomo_title" />
            </Link>
          </div>
          <div className="column">
            <Link to="/reservations/">
              <FormattedMessage id="reserve_title" />
            </Link>
          </div>
          <div className="column">
            <Link to="/products/">
              <FormattedMessage id="products_title" />
            </Link>
          </div>
          <div className="column">
            <Link to="/contacts/">
              <FormattedMessage id="contacts_title" />
            </Link>
          </div>
        </div>
        <h1 class="title is-size-1">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <div class="navbar">
          <Language />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
