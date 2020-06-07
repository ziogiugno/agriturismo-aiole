import { Link, FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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
    <section className="hero banner-tre banner-center box">
      <div className="hero-head">
        <div className="container">
          <h2 className="subtitle">
            <Language />
          </h2>
          <h1 className="title is-size-2 is-italic has-text-grey">
            {data.site.siteMetadata.title}
          </h1>
        </div>
      </div>
      <div className="hero-body"></div>
      <div className="hero-foot">
        <nav className="tabs has-background-primary opaco has-text-weight-semibold">
          <div className="container">
            <ul className="">
              <li className="">
                <Link to="/" className="navbar-item">
                  <FormattedMessage id="index_title" />
                </Link>
              </li>
              <li>
                <Link to="/accomodations/" className="navbar-item">
                  <FormattedMessage id="accomo_title" />
                </Link>
              </li>
              <li>
                <Link to="/reservations/" className="navbar-item">
                  <FormattedMessage id="reservations_title" />
                </Link>
              </li>
              <li>
                <Link to="/products/" className="navbar-item">
                  <FormattedMessage id="products_title" />
                </Link>
              </li>
              <li>
                <Link to="/contacts/" className="navbar-item">
                  <FormattedMessage id="contacts_title" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>{" "}
      {/*       <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <h1 className="title ">
                
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
              </div>
            </div>
          </div>
        </nav>
      </div>
 */}{" "}
      {/*         <div className="navbar">
          <Language />
        </div> */}
    </section>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
