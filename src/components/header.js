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
          <div>
            <span>
              <div id="TA_cdsratingsonlynarrow440">
                <ul id="ZknVvg" class="TA_links W3twVeEH6">
                  <li id="mf7QRMQj" class="7rM7zl1gd">
                    <a target="_blank" href="https://www.tripadvisor.it/">
                      <img
                        src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png"
                        alt="TripAdvisor"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <script src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=440&amp;locationId=2334152&amp;lang=it&amp;border=true&amp;display_version=2"></script>
            </span>
          </div>
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
