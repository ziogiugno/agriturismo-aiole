import { Link, FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import Language from "./language";
import { useStaticQuery, graphql } from "gatsby";
import Banner from "../images/banner02.jpg";

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

  console.log(Banner);

  return (
    <header className="section">
      <section className="hero">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <h1 className="title is-size-2">
                  {data.site.siteMetadata.title}
                </h1>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link to="/" className="navbar-item">
                    <FormattedMessage id="index_title" />
                  </Link>
                  <Link to="/accomodations/" className="navbar-item">
                    <FormattedMessage id="accomo_title" />
                  </Link>
                  <Link to="/reservations/" className="navbar-item">
                    <FormattedMessage id="reserve_title" />
                  </Link>
                  <Link to="/products/" className="navbar-item">
                    <FormattedMessage id="products_title" />
                  </Link>
                  <Link to="/contacts/" className="navbar-item">
                    <FormattedMessage id="contacts_title" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar">
          <Language />
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
